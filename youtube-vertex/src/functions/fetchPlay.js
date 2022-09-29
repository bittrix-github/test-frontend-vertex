import axios from "axios";



const fetchPlay = (videoId) => {

    const API_KEY = 'AIzaSyBwSX5T5mDVFRKVpInrlk0YjKCiOO4WmpQ';

    const link = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${API_KEY}`

    
    return(
    
        axios
            
            .get(`${link}`)

            .then((response) => {console.log(response.data.items); return response.data.items})

            .catch(error => console.log(error))

    )

};


export default fetchPlay;