import React, { useState, useEffect} from 'react'
import fetchSearch from '../../../functions/fetchSearch'
import {
        ResultsContainerStyle,
        ResultsItemStyle,
        ResultsVideoThumb,
        ResultsVideoInfo,
        ResultsVideoTitle,
        ResultsVideoDescription,
        ResultsItemMask
    }
from './styles'

const Results = props => {
    const [ data, setData ] = useState([ ])

    useEffect( () => {
        if ( props.inputValueAdd ) {
            fetchSearch(props.inputValueAdd).then( response => { setData(response || 'No data') } )
        } else if ( !props.inputValueAdd ) {
            setData([ ])
        }
    }, [ props.inputValueAdd ] )

    function playHandler(event){
        let videoId = event.target.id
        return[ props.playHandler(videoId) ]
    }

    const videoResults = data.map( video => (
            <ResultsItemStyle key={ video.etag }>
                <ResultsVideoThumb>
                    <img src = { video.snippet.thumbnails.medium.url } alt='thumbnail'></img>
                </ResultsVideoThumb>

                <ResultsVideoInfo>
                    <ResultsVideoTitle>{ video.snippet.title }</ResultsVideoTitle>
                    <ResultsVideoDescription>{ video.snippet.description }</ResultsVideoDescription>
                </ResultsVideoInfo>

                <ResultsItemMask id= { video.id.videoId } onClick = { event => playHandler(event) }></ResultsItemMask>
            </ResultsItemStyle>
        )
    )    

    return (
        <ResultsContainerStyle>
            { videoResults }
        </ResultsContainerStyle>
    )
}

export default Results