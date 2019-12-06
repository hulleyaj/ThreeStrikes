import { root, headers } from '.';

const url = `${root}/ExpoTokens`;

class ExpoTokensService {
  post = async deviceInfo => {
    const request = new Request(url, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        ...deviceInfo
      })
    });

    fetch(request);
  }
}

export default new ExpoTokensService();
