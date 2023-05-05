import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers:{
        Authorization: 'Client-ID lY-M6C0VoLxEV8j3cVY0_LECRb4Qt_pKt54BEAqYJ6w',
    },
    params:{
        query: 'term',
    },
    });
    return response.data.results;
};

export default searchImages;