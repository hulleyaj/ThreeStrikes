import { root, headers } from '.';

const url = `${root}/ThreeStrikes`;

class ThreeStrikesService {
  get = async urlParams => {
    const request = new Request(`${url}?${urlParams}`, {
      headers,
      method: 'GET'
    });
    const response = await fetch(request);

    return response.json();
  }
}

export default new ThreeStrikesService();
