import axios from 'axios';

export const fetchAllData = async () => {

    const options = {
        method: 'GET',
        url: 'https://zillow-base1.p.rapidapi.com/WebAPIs/zillow/searchByUrl',
        headers: {
            'X-RapidAPI-Key': 'c77ac38ea7mshc3153da3be08b85p1fa043jsncb05780c8367',
            'X-RapidAPI-Host': 'zillow-base1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        // return response.data
    } catch (error) {
        console.error(error);
    }
}