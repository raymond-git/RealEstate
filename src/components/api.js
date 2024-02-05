import axios from 'axios';

export const fetchAllData = async () => {

    const options = {
        method: 'GET',
        url: 'https://zillow-working-api.p.rapidapi.com/search/byaddress',
        params: {
            query: 'California',
            page: '1'
          },
          headers: {
            'X-RapidAPI-Key': 'cda04b15damsh1643f711a05ec0ep1cb3c4jsn4a84296ba899',
            'X-RapidAPI-Host': 'zillow-working-api.p.rapidapi.com'
          }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}