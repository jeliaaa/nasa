import React from 'react'
import './moonMain.scss'
import { Container } from 'react-bootstrap'
const MoonPage = () => {
    const Scroll = require('react-scroll');
    const scroll = Scroll.animateScroll;
    
    return (
        <div>
            <div className='moonMain'></div>
            <div className='moonMain'>
                <Container className='contOfMoon'>
                    <img src="https://wyldemoon.co.uk/wp-content/uploads/2022/11/February-2023-Moon-Calendar.png" alt="" />
                </Container>
            </div>
        </div>
    )
}

export default MoonPage