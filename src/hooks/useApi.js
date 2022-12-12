import {create} from 'apisauce';

export const api = create({
  baseURL: 'https://api.canerture.com/ecommerce',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
});
