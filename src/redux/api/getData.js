import {baseUrl} from './commonApi';
import axios from 'axios';
const fetchDataFromFirebase = async () => {
    try {
      const response = await axios.get(`${baseUrl}/dearpet.json`);

      const data =  response.data;
      console.log("data from api",data);
      if(data){
        return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
      }
      else{
        return [];
      }
      
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
      throw error;
    }
  };
  
  export default fetchDataFromFirebase;