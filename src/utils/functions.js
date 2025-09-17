const API = {
  fetchSwapi: async (link, changeFunc) => {
    try {
      const res = await fetch(link);
      if (!res.ok) throw new Error(`Fetch request failed, status: ${res.status} `);
      const json = await res.json();  
      changeFunc(json.results);
    } catch(error) {
      console.error(`Error during API request to planets: ${error}`)
    }
  }
}

export default API;