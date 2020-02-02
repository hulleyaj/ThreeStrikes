import base64 from 'base-64';

export const root = 'https://threestrikesapi.azurewebsites.net/api';

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Basic ${base64.encode('threestrikes:api')}`
};
