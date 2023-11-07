import React from 'react'
import { 
    CarouselCardBlock, 
    CarouselCardCol, 
    CarouselCardImg, 
    CarouselCardInternal, 
    CarouselCardP, 
    CarouselCardTitle, 
    CarouselCardLink,
} from './CarouselElements'
// "../../images/"+cardInfo['img_src']

const CarouselCard = ({ cardInfo }) => {
    
    return (
        <CarouselCardCol style={{paddingTop: '10px'}}>
            <CarouselCardInternal className={'w-full'}>
                <CarouselCardImg src={require("../../images/"+cardInfo['img_src'])} className="card-img-top img-fluid" />
                <CarouselCardBlock className={"card-block"} style={{'minHeight': '60vh', 'maxHeight': '70vh'}}>
                    <CarouselCardTitle className={"card-title m-3"}>{cardInfo['title']}</CarouselCardTitle>
                    <CarouselCardP>{cardInfo['summary']}</CarouselCardP>
                </CarouselCardBlock>
                <CarouselCardLink href={cardInfo['link']} target="_blank" className={"stretched-link"} />
            </CarouselCardInternal>
        </CarouselCardCol>
    )
}

export default CarouselCard