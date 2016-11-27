import jsonp from 'jsonp-es6';

const url = 'https://api.vk.com/method/photos.search';

export default {
  getPhotos: (searchText) => {

    const params = {
      q: searchText
    }

    return jsonp(url, params)
      .then(res => {
        console.log(res)
        return res.response;
      })
      .catch(err => {
        console.log(err);
      });
  }
}