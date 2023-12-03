import axios from 'axios';

export const fetchAllData = async () => {

    const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete',
        params: {
            input: 'California, San Francisco',
            limit: '30'
        },
        headers: {
            'X-RapidAPI-Key': 'c77ac38ea7mshc3153da3be08b85p1fa043jsncb05780c8367',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
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