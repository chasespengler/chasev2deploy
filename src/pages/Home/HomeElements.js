import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Row} from 'react-bootstrap'

export const Home = styled.div`

`

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    margin-top: -80px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
         transparent 100%);
        z-index: 2;
    }
`

export const AboutContainer = styled.div`
    background: linear-gradient(0deg, #113137 5%, #fff 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentContainer = styled.div`
    background: linear-gradient(0deg, #113137 5%, #fff 100%);
    min-height: 100vh;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;   
`

export const HeroFg = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const ImgFg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const ImgFgBk = styled.img`
    width: 60%;
    object-fit: scale-down;
    -o-object-fit: scale-down;
`

export const HeroContent = styled.div`
    z-index: 3;
    width: 100%;
    position: absolute;
    padding: 8px 0;
    opacity: 90%;
`

export const HeroH1 = styled.h1`
    margin-top: -150px;
    color: white;
    text-align: left;
    font-size: 350%;
    margin-bottom: 55px;
    margin-left: 125px;
    max-width: 100%;
    padding-left: 10px;
    font-family: 'Smooch', cursive;

    @media screen and (max-width: 480px) {
        font-size: 200%;
        margin-left: 20vw;
    }
`

export const HeroPContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const HeroP = styled.p`
    font-weight: bold;
    color: white;
    text-align: center;
    margin: 5px;
    width: 50vw;
    min-width: 100px;
`

export const HeroBtnWrapper = styled.div`
    margin-top: 22vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding-left: 20px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

    &:hover {
        cursor: pointer;
        color: gold;
        transform: scale(1.5);
    }
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRightBig = styled(ArrowRight)`
    font-size: 4.5em;

    &:hover {
        cursor: pointer;
        transform: scale(1.25);
        color: gold;
    }

    &:before {
        transition: all ease-in-out 2500ms;
    }
`

export const CarouselRow = styled(Row)`
    margin-top: 2%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`

export const AboutCarouselP = styled.p`
    text-align: center;
    padding: 20px;
    display: flex;
    align-self: center;
    font-size: 25px;
    font-family: 'Caveat', cursive;
`

export const SectionHeading = styled.h3`
    &:hover {
        cursor: pointer;
    }
    display: flex;
    justify-content: center;
`