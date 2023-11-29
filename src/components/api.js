export const fetchAllData = async () => {
    try {
        const realEstateData = axios.get('');
        return realEstateData;
    } catch (error) {
        console.log(error)
    }
}