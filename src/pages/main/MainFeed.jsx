import React from 'react'
import Container from 'react-bootstrap/Container';
import NewsCard from '../../comps/newsCard/NewsCard';
import './pages.scss'
import { Link } from 'react-router-dom';
import AccordionItem from '../accordion/AccordionItem';
import { Carousel } from 'react-bootstrap';

const MainFeed = () => {
  return (
    <div className='main'>
      <div className='imageOfMainHero'>
        <Carousel className='main_slider' >
          <Carousel.Item interval={1000}>
            <img src='https://th.bing.com/th/id/R.a61d96f23882c8e5a47ab16a6a7d7207?rik=QGLtMMZ1AoMqYw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fOcean-underwater-light-wallpaper-hd.jpg&ehk=RLmSM8K8ZQQn3YDnpMQGZfb5E3dJHQENNRqudKJONlY%3d&risl=1&pid=ImgRaw&r=0' />
            <Carousel.Caption>
              <h3>What's up with the water?</h3>
              <p>Local water analytics</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src='https://images2.alphacoders.com/437/437435.jpg' />
            <Carousel.Caption>
              <h3>More than just a data</h3>
              <p>We create a community not a statistics table.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src='https://images5.alphacoders.com/420/thumb-1920-420951.jpg' />
            <Carousel.Caption>
              <h3>What species are endangered?</h3>
              <p>What species do we have to save from extinction?</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container className='moon'>
        <div className='head'>
          <h3>Ocean currents</h3>
          <hr />
        </div>
        <div className="moon_now">
          <AccordionItem
            title=" 7 დღე > "
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <button className='buttonOfSite'><Link to={'/moon'}>ნახვა</Link></button>
        </div>
      </Container>
      <Container className='news'>
        <div className='head'>
          <h3>News</h3>
          <hr />
        </div>
        <div className='news_wrapper'>
          <NewsCard id={1} />
          <NewsCard id={3} />
        </div>
      </Container>
    </div>
  )
}

export default MainFeed