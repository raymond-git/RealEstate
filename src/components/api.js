import axios from 'axios';

export const fetchAllData = async () => {

    const options = {
        method: 'GET',
        url: 'https://realtor16.p.rapidapi.com/property',
        params: {
            property_id: '1497548641'
        },
        headers: {
            'X-RapidAPI-Key': 'c77ac38ea7mshc3153da3be08b85p1fa043jsncb05780c8367',
            'X-RapidAPI-Host': 'realtor16.p.rapidapi.com'
        }
    };

    try {
        const realEstateData = await axios.request(options);
        return realEstateData;
    } catch (error) {
        console.log(error)
    }
}