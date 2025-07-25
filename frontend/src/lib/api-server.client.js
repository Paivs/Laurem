// @/lib/api-server.client.js

async function apiFetchClient(path, options = {}) {
  const { skipAuth = false, ...fetchOptions } = options;

  const headers = {
    "Content-Type": "application/json",
    ...fetchOptions.headers,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_API_URL}/api/${path}`, {
    ...fetchOptions,
    headers,
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    let errorMessage = "Erro na requisição do servidor.";
    try {
      const err = data;
      if (err?.message) errorMessage = err.message;
    } catch {}
    throw new Error(errorMessage);
  }

  return data;
}

export const apiClient = {
  get: (path, options = {}) => apiFetchClient(path, options),
  post: (path, body, options = {}) =>
    apiFetchClient(path, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    }),
  put: (path, body, options = {}) =>
    apiFetchClient(path, {
      method: "PUT",
      body: JSON.stringify(body),
      ...options,
    }),
  del: (path, options = {}) =>
    apiFetchClient(path, {
      method: "DELETE",
      ...options,
    }),
  public: {
    get: (path) => apiFetchClient(path, { skipAuth: true }),
    post: (path, body) =>
      apiFetchClient(path, {
        method: "POST",
        body: JSON.stringify(body),
        skipAuth: true,
      }),
  },
}; 