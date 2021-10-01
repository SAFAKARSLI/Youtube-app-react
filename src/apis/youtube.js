import axios from 'axios';

const KEY = 'AIzaSyDStetmB9h_B-wiclZQSHxLz4CrEVxHQCk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})