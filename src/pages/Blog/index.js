import React, {useRef} from 'react'
import {Row, Container, Card, Col} from 'react-bootstrap'
import dater from '../../dater/dater.json'
import {MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {
    BlogContainer,
} from './BlogElements'
import BlogCard from '../../components/BlogCard'

export default function BlogPage() {

    const blogs = dater['blogs']

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <BlogContainer id="bloggyblogblog">
            <div id='blog-header' className='text-center'>
                <br></br>
                <h1>Blog</h1>
            </div>
            <div class='text-center'>
                <h2>Coming Soon!</h2>
            </div>
            {/* <div className={'relative flex items-center'}>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div id="slider" className={'w-full h-[500px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'}>                   
                    {blogs.map((blog, index) => (
                        <Col xs={11} sm={8} md={5} lg={4} xl={3} className={'inline-block m-2 text-center cursor-pointer hover:scale-105 ease-in-out duration-300'}>
                            <BlogCard key={index} cardInfo = {blog}/>
                        </Col>
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div> */}
        </BlogContainer>
    );
}