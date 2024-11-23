import axios from 'axios';
import { NEWS_API } from './consts';

export const newsClient = axios.create({
  baseURL: NEWS_API, // replace with your actual base URL if different
  headers: {
    'Content-Type': 'application/json',
  },
});

