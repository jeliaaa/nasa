import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './feed.scss'

const Feed = () => {
    return (
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 40, padding: 20 }}>
            <Link className='info_card_wrapper' to={`1`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`https://museum.ge/files/colection/sabunebismetyvelo/ichtologia/2.jpg`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>25.02.2023</p>
                        <h3>ფორონჯი</h3>
                        <hr />
                        <p>გავრცელებულია შავი ზღვის სამხრეთ-აღმოსავლეთ ნაწილსა და მიმდებარე მდინარეებში. წარსულში ფართოდ იყო გავრცელებული ევროპის ყველა სანაპირო ზოლში. დღეისათვის იშვიათად გვხვდება აღმოსავლეთ ატლანტიდაში: მდინარეების გარონასა და დორდონის აუზებში, ხმელთაშუა ზღვის ჩრდილოეთ სანაპიროზე, მაროკოში</p>
                    </div>
                </Card>
            </Link>
            <Link className='info_card_wrapper' to={`2`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`https://fishmarket.ge/content/images/thumbs/0001010_georgian-trout_540.jpeg`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>24.02.2023</p>
                        <h3>კალმახი</h3>
                        <hr />
                        <p>კალმახები — თევზები ორაგულისებრთა ოჯახისა. გამსვლელ ორაგულთა გვარის (Salmo და Oncorhynchus) მტკნარი წყლის ფორმებია. ბინადრობენ მთის ტბებსა და მდინარეებში. უყვართ ცივი, ჟანგბადით მდიდარი, სუფთა წყალი. </p>
                    </div>
                </Card>
            </Link>
            <Link  className='info_card_wrapper' to={`3`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`data:image/jpeg;base64,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`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>23.02.2023</p>
                        <h3>ჯარღალა</h3>
                        <hr />
                        <p>გავრცელების არეალი: გავრცელებულია შავი ზღვის სამხრეთ-აღმოსავლეთ სანაპირო ზოლში, გვხვდება მდ. რიონსა და პალიასტომის ტბაში. ევროპაში აზოვის, კასპიის და არალის ზღვებში.</p>
                    </div>
                </Card>
            </Link>
            <Link  className='info_card_wrapper' to={`4`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`https://nationalgeographic.ge/app/uploads/sites/4/2019/08/955x960_LK_%E1%83%97%E1%83%94%E1%83%95%E1%83%96%E1%83%94%E1%83%91%E1%83%989.png`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>23.02.2023</p>
                        <h3>ტარაღანა</h3>
                        <hr />
                        <p>მტკნარი და ზღვის წყლის ბინადარი, გვხვდება 10-100 მ. სიღრმეზე. გასამრავლებლად შედის შავი ზღვიდან მდინარეებში: რიონში, ჭოროხში, ენგურში, კოდორში, გუმისთაში, ასევე პალიასტომის ტბაში. გვხვდება კასპიის ზღვის ჩრ. ნაწილში, ბოსფორში, მარმარილოს ზღვაში, იშვიათად ადრიატიკის ზღვაში. მრავლდება მტკნარ წყლებში, იზრდება ზღვაში.</p>
                    </div>
                </Card>
            </Link>
            <Link  className='info_card_wrapper' to={`5`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%D0%91%D1%96%D0%BB%D1%83%D0%B3%D0%B0_%28Huso_huso%29.jpg/1200px-%D0%91%D1%96%D0%BB%D1%83%D0%B3%D0%B0_%28Huso_huso%29.jpg`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>23.02.2023</p>
                        <h3>სვია</h3>
                        <hr />
                        <p>სვია— თევზი ზუთხისებრთა ოჯახისა. მისი სხეულის სიგრძე 9 მ, მასა 1,5 ტ აღწევს. აქვს უზარმაზარი, ნახევარმთვარისებური პირი და ერთმანეთთან შეზრდილი ლაყუჩის აპკები. სვია ბინადრობს კასპიის, შავ, აზოვისა და ადრიატიკის ზღვებში. საქართველოში შავი ზღვის სანაპიროებთან ყველგან გვხვდება. გამსვლელი თევზია, გასამრავლებლად მდინარეებში შედის. იკვებება თევზით.</p>
                    </div>
                </Card>
            </Link>
            {/* <Link key={id} className='info_card_wrapper' to={`${id}`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`https://picsum.photos/id/31${id}/300/200`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>19.02.2023</p>
                        <h3>სათაური</h3>
                        <hr />
                        <p>ინფორაცია ინფორმაცია</p>
                    </div>
                </Card>
            </Link>
            <Link key={id} className='info_card_wrapper' to={`${id}`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`https://picsum.photos/id/31${id}/300/200`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>17.02.2023</p>
                        <h3>სათაური</h3>
                        <hr />
                        <p>ინფორაცია ინფორმაცია</p>
                    </div>
                </Card>
            </Link> */}
            {/* <Link key={id} className='info_card_wrapper' to={`${id}`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`https://picsum.photos/id/31${id}/300/200`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>25.01.2023</p>
                        <h3>სათაური</h3>
                        <hr />
                        <p>ინფორაცია ინფორმაცია</p>
                    </div>
                </Card>
            </Link>
            <Link key={id} className='info_card_wrapper' to={`${id}`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`https://picsum.photos/id/31${id}/300/200`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>18.10.2022</p>
                        <h3>სათაური</h3>
                        <hr />
                        <p>ინფორაცია ინფორმაცია</p>
                    </div>
                </Card>
            </Link>
            <Link key={id} className='info_card_wrapper' to={`${id}`}>
                <Card className='info_card'>
                    <div className='image_wrapper'>
                        <img src={`https://picsum.photos/id/31${id}/300/200`} alt="..." />
                    </div>
                    <div className="info_card_heading">
                        <p>25.02.2012</p>
                        <h3>სათაური</h3>
                        <hr />
                        <p>ინფორაცია ინფორმაცია</p>
                    </div>
                </Card>
            </Link> */}
        </div>
    )
}

export default Feed