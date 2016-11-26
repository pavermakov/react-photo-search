import axios from 'axios';

const url = 'https://api.vk.com/method/photos.search?q=';

export default {

  getPhotos: (searchText) => {

    return axios.get(url + searchText)
      .then(res => {
        return res.data.response;
      })
      .catch(err => {
        console.log(err);
      });
  }

}