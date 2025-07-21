// middleware.ts
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const protectedPrefixes = ['/admin'];
const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;

  // Verifica se a rota é protegida
  const isProtected = protectedPrefixes.some(prefix => 
    pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  // 1. Verificação básica do token
  if (!token) {
    return redirectToLogin(request);
  }

  try {
    // 2. Verificação JWT
    const decoded = verify(token, JWT_SECRET)

    // 3. Verificar expiração
    if (Date.now() >= decoded.exp * 1000) {
      return redirectToLogin(request, 'Sessão expirada');
    }

    // 4. Verificação de perfil para rotas admin
    if (pathname.startsWith('/admin') && decoded.perfil !== 'admin') {
      const unauthorizedUrl = new URL('/unauthorized', request.url);
      return NextResponse.redirect(unauthorizedUrl);
    }

    // 5. Clonar a requisição e adicionar dados do usuário
    const response = NextResponse.next();
    response.headers.set('x-user-perfil', decoded.perfil);
    
    return response;

  } catch (error) {
    console.error('JWT verification failed:', error);
    return redirectToLogin(request, 'Sessão inválida');
  }
}

// Função auxiliar para redirecionar para login
function redirectToLogin(request, message) {
  const loginUrl = new URL('/login', request.url);
  if (message) loginUrl.searchParams.set('error', message);
  loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    '/admin/:path*',
    // Adicione outras rotas protegidas conforme necessário
  ],
};