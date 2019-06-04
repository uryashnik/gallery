export default class ApiService {

  url = 'https://jsonplaceholder.typicode.com/photos';
  /*Из полученного массива находим количество альбомов */
  getAmountAlbum = async (res) => {
    let count = 10;
    res.forEach((item) => {
      if(item.albumId > count){
        count = item.albumId
      };
    });
    return count;
  };
  /*Трансформируем массив обьектов в удобную разбивку, 
  массив содержащий отдельно массив для каждого альбома */
  getAlbums = async (arr, length = 5) => {
    let albums = [];
    for (let i = 0; i < length; i++){
      albums[i] = arr.filter((item) => {
        
        console.log(1);
        return item.albumId === i + 1;
      })
    };
    return albums;
  };

  getData = async () => {
    const res = await fetch(this.url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this.url}` +
        `, received ${res.status}`)
    }
    const data =  await res.json();
    return await this.getAmountAlbum(data);
    //return await this.getAlbums(data, lenght);
  
  }; 

};

