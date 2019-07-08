const webApiUrl = 'https://localhost:5001/api/ThreeStrikes';

class ThreeStrikesService {
    get = async urlParams => {
        const options = {
            method: 'GET'
        }
        const request = new Request(`${webApiUrl}?${urlParams}`, options);
        const response = await fetch(request)
        return response.json();
    }
}

export default ThreeStrikesService;