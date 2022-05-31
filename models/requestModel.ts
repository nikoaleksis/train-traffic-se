const request = {
  request: async function request<T>(url: string, config: RequestInit): Promise<T> {
    const response = await fetch(url, config);
    if (response.ok) {
      const result = await response.json();
      return result.data;
    }
    throw new Error(`Request returned a ${response.status} code`);
  },
}

export default request;