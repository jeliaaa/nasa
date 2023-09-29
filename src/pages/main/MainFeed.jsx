import React from 'react'
import Container from 'react-bootstrap/Container';
import NewsCard from '../../comps/newsCard/NewsCard';
import './pages.scss'
import { Link } from 'react-router-dom';
import AccordionItem from '../accordion/AccordionItem';
const MainFeed = () => {
  return (
    <div className='main'>
      <Container>
        <div className='mainImg'><p>გაეცანი სხვის პირად გამოცდილებას და გაიგე მეტი იმის შესახებ, რაც ყველაზე ძალიან გვიყვარს.</p></div>
      </Container>
      <Container className='moon'>
        <div className='head'>
          <h3>მთვარის კალენდარი</h3>
          <hr />
        </div>
        <div className="moon_now">
          {/* <div><p>მთვარე დღეს:</p><img src="https://www.webexhibits.org/calendars/imagesFolder/moonphase/fullZ.jpg" alt=".moon" /></div> */}
          <AccordionItem
            title=" 7 დღე > "
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <button className='buttonOfSite'><Link to={'/moon'}>ნახვა</Link></button>
        </div>
      </Container>
      <Container className='news'>
        <div className='head'>
          <h3>ახალი ამბები</h3>
          <hr />
        </div>
        <div className='news_wrapper'>
          <NewsCard />
          <NewsCard />
        </div>
      </Container>
    </div>
  )
}

export default MainFeed