import base64 from 'base-64';

// const webApiUrl = 'https://localhost:5001/api/ThreeStrikes';
const webApiUrl = 'https://threestrikesapi.azurewebsites.net/api/ThreeStrikes';

class ThreeStrikesService {
  get = async urlParams => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Basic ${base64.encode('threestrikes:api')}`
      }
    };

    const request = new Request(`${webApiUrl}?${urlParams}`, options);
    const response = await fetch(request);
    return response.json();
  }
}

export default ThreeStrikesService;
