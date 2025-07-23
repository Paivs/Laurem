// middleware.ts
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

// Configuração de rotas e métodos
const routeConfig = {
  // Rotas completamente públicas (todos métodos)
  publicRoutes: [
    "/api/auth/login",
    "/api/auth/register",
    "/api/articles:GET", // GET público, outros métodos protegidos
    "/api/articles/[id]", // GET público, outros métodos protegidos
  ],
  
  // Rotas que exigem autenticação mas não verificação de perfil
  authenticatedRoutes: [
    "/api/user",
    "/api/orders"
  ],
  
  // Rotas admin (exigem perfil admin)
  adminRoutes: [
    "/admin",
    "/api/admin"
  ]
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const method = request.method;
  const token = request.cookies.get("token")?.value;

  // Helper para verificar se a rota está em uma configuração
  const isRouteMatch = (routePattern) => {
    const [basePath, allowedMethods] = routePattern.split(":");
    const methods = allowedMethods ? allowedMethods.split(",") : [];
    
    return (pathname === basePath || pathname.startsWith(`${basePath}/`)) &&
           (methods.length === 0 || methods.includes(method));
  };

  // 1. Verificar rotas públicas
  const isPublic = routeConfig.publicRoutes.some(route => {
    if (route.includes(":")) {
      return isRouteMatch(route);
    }
    // Rota completamente pública
    return pathname === route || pathname.startsWith(`${route}/`);
  });

  if (isPublic) { 
    return NextResponse.next();
  }

  // 2. Verificar autenticação para rotas protegidas
  if (!token) {
    return redirectToLogin(request);
  }

  try {
    const decoded = verifyToken(token);

    // 4. Verificar expiração
    if (Date.now() >= decoded.exp * 1000) {
      return redirectToLogin(request, "Sessão expirada");
    }

    // 5. Verificar rotas admin
    const isAdminRoute = routeConfig.adminRoutes.some(route => 
      pathname === route || pathname.startsWith(`${route}/`)
    );

    if (isAdminRoute && !decoded) {
      const unauthorizedUrl = new URL("/unauthorized", request.url);
      return NextResponse.redirect(unauthorizedUrl);
    }

    // 6. Adicionar informações do usuário à requisição
    const response = NextResponse.next();
    response.headers.set("x-user-id", decoded.sub || "");
    response.headers.set("x-user-perfil", decoded.perfil);

    return response;

  } catch (error) {
    console.error("Falha na verificação JWT:", error);
    return redirectToLogin(request, "Sessão inválida");
  }
}

function redirectToLogin(request, message) {
  const loginUrl = new URL("/auth/login", request.url);
  if (message) loginUrl.searchParams.set("error", message);
  loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/:path*",
    "/user/:path*"
  ],
};