import React from 'react'
import { 
    CarouselCardBlock, 
    CarouselCardCol, 
    CarouselCardImg, 
    CarouselCardInternal, 
    CarouselCardP, 
    CarouselCardTitle, 
    CarouselCardLink,
} from './BlogCardElements'

const BlogCard = ({ cardInfo }) => {
    
    return (
        <CarouselCardCol xs={12} className="flex-wrap">
            <CarouselCardInternal>
                <CarouselCardImg src={require("../../images/"+cardInfo['img_src'])} className="card-img-top img-fluid" />
                <CarouselCardBlock className={"card-block"}>
                    <CarouselCardTitle className={"card-title m-3"}>{cardInfo['title']}</CarouselCardTitle>
                    <CarouselCardP>{cardInfo['summary']}</CarouselCardP>
                </CarouselCardBlock>
                <CarouselCardLink href={cardInfo['link']} target="_blank" className={"stretched-link"} />
            </CarouselCardInternal>
        </CarouselCardCol>
    )
}

export default BlogCard