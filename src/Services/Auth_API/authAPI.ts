import axios from 'axios';

const API_URL = 'http://localhost:3000/api/token';

export const getAccessToken = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.accessToken;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw new Error('Unable to fetch access token');
  }
};
