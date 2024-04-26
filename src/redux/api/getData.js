import {baseUrl} from './commonApi';

const fetchDataFromFirebase = async () => {
    try {
      const response = await fetch(`${baseUrl}/card.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
      throw error;
    }
  };
  
  export default fetchDataFromFirebase;