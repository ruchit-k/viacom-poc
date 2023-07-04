import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor() { }

getData() {
  return axios.get('https://api.publicapis.org/entries',
{  });
}
}