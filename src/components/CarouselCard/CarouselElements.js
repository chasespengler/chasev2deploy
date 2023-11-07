import styled from 'styled-components'
import {Container, Card, Col,} from 'react-bootstrap';

export const CarouselCardCol = styled(Col)`
    display: flex;
    align-self: stretch;
    white-space: normal;
    margin: 25px;
    /* max-width: 25%; */
`

export const CarouselCardInternal = styled(Card)`
    cursor: pointer;
    position: relative;

    &:hover {
        box-shadow: 0 0 30px gold;
        transform: scale(1.05);
        color: black;
    }

    &:before {
        transition: all ease-in-out 250ms;
    }
`

export const CarouselCardImg = styled.img`
    max-height: 155px;
`

export const CarouselCardBlock = styled.div`
overflow-x: wrap;

`

export const CarouselCardTitle = styled.h4`
    border-bottom: 1px solid grey;
    padding-bottom: 3px;
`

export const CarouselCardP = styled.p`
    width: 80%;
    margin-left: 10%;

`

export const CarouselCardLink = styled.a`

`