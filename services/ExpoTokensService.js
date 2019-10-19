import { root, headers } from '.';

const url = `${root}/ExpoTokens`;

class ExpoTokensService {
  post = async token => {
    const request = new Request(url, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        token
      })
    });
    const response = await fetch(request);

    return response.json();
  }
}

export default new ExpoTokensService();
