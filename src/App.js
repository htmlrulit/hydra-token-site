import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HydraInfo from './HydraInfo';
import FarmingInfo from './FarmingInfo';
import Footer from './Footer';
import Typewriter from 'react-typewriter-effect';

const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background-color: #000;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 2;
`;

const Title = styled.div`
    font-size: 4rem;
    background: linear-gradient(90deg, #00ff00, #007f00);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    overflow: hidden;
    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.div`
    font-size: 2rem;
    color: #00ff00;
    overflow: hidden;
    white-space: nowrap;
    font-family: 'Montserrat Thin', sans-serif;
    font-weight: 100;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 2s;
`;

const Section = styled.section`
    padding: 4rem 2rem;
    background-color: #000;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 3;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }
`;

const App = () => {
    const [animationStep, setAnimationStep] = useState(0);
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    useEffect(() => {
        const handleAnimation = async () => {
            await new Promise(resolve => setTimeout(resolve, 250));
            setIsVideoVisible(true);
            await new Promise(resolve => setTimeout(resolve, 1250));
            setAnimationStep(1);
            document.body.style.overflow = 'auto';
        };

        document.body.style.overflow = 'hidden';
        handleAnimation();
    }, []);

    return (
        <div>
            <Container>
                <Video visible={isVideoVisible.toString()} autoPlay loop muted>
                    <source src="/video.mp4" type="video/mp4" />
                </Video>
                <TitleContainer>
                    {animationStep === 0 && (
                        <Title>
                            <Typewriter
                                textStyle={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    color: 'transparent',
                                    background: 'linear-gradient(90deg, #00ff00, #007f00)',
                                    WebkitBackgroundClip: 'text',
                                    fontSize: '4rem',
                                }}
                                startDelay={500}
                                cursorColor="#00ff00"
                                text="HYDRA"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={2000}
                                onLoopDone={() => setAnimationStep(1)}
                            />
                        </Title>
                    )}
                    {animationStep === 1 && (
                        <Subtitle>
                            <Typewriter
                                textStyle={{
                                    fontFamily: 'Montserrat Thin, sans-serif',
                                    color: '#ffffff',
                                    fontSize: '2rem',
                                    fontWeight: 100,
                                }}
                                startDelay={500}
                                cursorColor="#ffffff"
                                text="in TON we trust"
                                typeSpeed={100}
                                delaySpeed={2000}
                                onLoopDone={() => setAnimationStep(2)}
                            />
                        </Subtitle>
                    )}
                </TitleContainer>
            </Container>
            <Section>
                <HydraInfo />
            </Section>
            <Section>
                <FarmingInfo />
            </Section>
            <Footer />
        </div>
    );
};

export default App;
