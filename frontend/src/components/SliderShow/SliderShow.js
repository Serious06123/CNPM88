import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
}
const slideImages = [
    {
        url: 'https://cms.haivan.com/photos/nhung-thong-tin-can-biet-ve-benh-vien-da-khoa-sai-gon.png',
        // caption: 'Slide 1'
    },
    {
        url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/https://cms-prod.s3-sgn09.fptcloud.com/349162351_3142881296016807_8768622742839764667_n_11944ce766.jpg',
        // caption: 'Slide 2'
    },
    {
        url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/https://cms-prod.s3-sgn09.fptcloud.com/233_A6223_6486_1687595188_5728d16bb9.jpg',
        // caption: 'Slide 3'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}


export default Slideshow