const request = {
  request: async function request<T>(url: string, config: RequestInit): Promise<T> {
    const response = await fetch(url, config);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Request returned a ${response.status} code`);
  },
}

export default request;