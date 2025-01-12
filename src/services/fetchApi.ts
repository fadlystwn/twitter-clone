interface FetchOptions {
  method?: string; // HTTP method (e.g., 'GET', 'POST', etc.)
  headers?: Record<string, string>; // Custom headers
  body?: Record<string, unknown> | null; // Request body for POST/PUT
}

export const fetchApi = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> => {
  const { method = "POST", headers = {}, body = null } = options;

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    const errorDetails = await response.json().catch(() => ({}));
    throw new Error(
      `Request failed with status ${response.status}: ${JSON.stringify(errorDetails)}`
    );
  }

  return response.json();
};
