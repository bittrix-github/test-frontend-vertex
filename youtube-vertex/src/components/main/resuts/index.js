import React, { useState, useEffect} from 'react';


import fetchSearch from '../../../functions/fetchSearch';



import {
    
    ResultsContainerStyle,
    ResultsItemStyle,
    ResultsVideoThumb,
    ResultsVideoInfo,
    ResultsVideoTitle,
    ResultsVideoDescription

}

from './styles';




const Results = (props) => {


    const [data, setData] = useState([]);




    useEffect(() => {

        if(props.inputValueAdd) {

            fetchSearch(props.inputValueAdd).then(response => {setData(response || 'No data')})

        }

    }, [props.inputValueAdd])
    





    const videoResults = data.map(

        video => (

            <ResultsItemStyle key={video.etag}>
                                
                <ResultsVideoThumb>
                    <img src = {video.snippet.thumbnails.medium.url} alt = 'thumbnail'></img>                    
                </ResultsVideoThumb>

                <ResultsVideoInfo>
                    <ResultsVideoTitle>{video.snippet.title}</ResultsVideoTitle>
                    <ResultsVideoDescription>{video.snippet.description}</ResultsVideoDescription>
                </ResultsVideoInfo>

            </ResultsItemStyle>
    
        )
    
    )    



    return (

        <>

            <ResultsContainerStyle className = 'results__container'>

                {videoResults}

            </ResultsContainerStyle>
        
        </>        

    );

};


export default Results;