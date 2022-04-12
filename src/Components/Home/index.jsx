import React from 'react';
import './styleHome.css'
import HomeCarousel from '../Carousel';
import Presentation from '../Presentation';
import Temoignage from '../Temoignage'

function Home(props) {
    return (
        <div className={'home_carousel'}>
            <HomeCarousel />
            <Presentation />
            <Temoignage />
        </div>
    );
}

export default Home;