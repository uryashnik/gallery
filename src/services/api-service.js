export default class ApiService {

    url = 'https://jsonplaceholder.typicode.com/photos';

    getData = async () => {
        const res = await fetch(this.url);

        if (!res.ok) {
          throw new Error(`Could not fetch ${this.url}` +
            `, received ${res.status}`)
        }
        return await res.json();
      }
};

