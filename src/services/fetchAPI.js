import axios from 'axios';

axios.defaults.baseURL = 'https://6734e40c5995834c8a914384.mockapi.io';

export const fetchAPI = async () => {
  try {
    const response = await axios('/contacts');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
