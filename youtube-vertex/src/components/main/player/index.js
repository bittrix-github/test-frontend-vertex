import React, { useState, useEffect} from 'react';


import playVideo from '../../../functions/fetchPlay';


import { 

            PlayerContainerStyle,
            PlayerVideoContainer,
            PlayerVideoTitle,
            PlayerInfoContainer,
            PlayerVideoDescription,
        
        }
        
        from './styles';




const Player = (props) => {


    const [videoData, setVideoData] = useState([]);

    const [showPlayer, setShowPlayer] = useState(false);





    useEffect(() => {

        if(props.playVideoId) {

            playVideo(props.playVideoId).then(response => {setVideoData(response || 'No data')})

            setShowPlayer(true)

        }

    }, [props.playVideoId])


    

    const playerModal = videoData.map(

        video => (

            <PlayerContainerStyle key = {video.etag} className = 'player__container'>

                <PlayerVideoContainer className = 'player__video--container'>

                    {/* <ReactPlayer url = {`https://www.youtube-nocookie.com/embed/${video.id}`} width = '100%' height = '100%' controls/> */}
                    {video.id}

                </PlayerVideoContainer>

                <PlayerVideoTitle className = 'player__video--title'>

                    <span>{video.snippet.title}</span>

                </PlayerVideoTitle>

                <PlayerInfoContainer className = 'player__video--info'>

                    <span>{video.statistics.viewCount} views</span>
                    <span>{video.statistics.likeCount} likes</span>
                    <span>{video.statistics.commentCount} comments</span>

                </PlayerInfoContainer>

                <PlayerVideoDescription className = 'player__video--description'>

                    <span>{video.snippet.description}</span>

                </PlayerVideoDescription>

            </PlayerContainerStyle>

        )

    )



    if (showPlayer) {
        
        return(

            <>
        
                {playerModal}
        
            </>

        );

    }

};


export default Player;