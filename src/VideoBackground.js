import React from 'react';
import styled from '@emotion/styled';
import videoSource from './video.mp4';

const VideoContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const VideoBackground = () => {
    return (
        <VideoContainer>
            <Video autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
            </Video>
        </VideoContainer>
    );
};

export default VideoBackground;
