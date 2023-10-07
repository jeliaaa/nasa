import React, { useState } from 'react'
import './moonMain.scss'
import { Container, FormSelect } from 'react-bootstrap'
const MoonPage = () => {
    const Scroll = require('react-scroll');
    const scroll = Scroll.animateScroll;
    const [index, setIndex] = useState(1);
    console.log(index)
    return (
        <div className='moonMain'>
            <Container className='contOfMoon'>
                <img style={{ width: '60%', height: 'auto' }} src="https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/flat_global_ecco2_2028x1024.25000.jpg" alt="" />
                OCEAN CURRENT
            </Container>
            <div className='tab_menu'>
                <label style={{ color: "#FFF", fontSize: 25 }}>Ocean</label>
                <FormSelect style={{ width: '30%' }} onChange={(e) => setIndex(parseInt(e.currentTarget.value))}>
                    <option value={1}>Atlantic</option>
                    <option value={2}>Pacific</option>
                    <option value={3}>Indian</option>
                </FormSelect>
            </div>
            <div>
                {index === 1 ? <div className="tabpanel">
                    <div className="cardOfPanel">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Golfstrom.jpg/300px-Golfstrom.jpg" alt="" />
                        <div>
                            <h5>Gulf stream</h5>
                            <p>Atlantic ocean</p>
                            <p>The Gulf Stream, together with its northern extension the North Atlantic Drift, is a warm and swift Atlantic ocean current that originates in the Gulf of Mexico and flows through the Straits of Florida and up the eastern coastline of the United States.</p>
                            <p style={{ color: 'red' }}>Warm</p>
                        </div>
                    </div>
                    <div className="cardOfPanel">
                        <img src="https://cdn.britannica.com/21/243221-050-0905B9D6/Locator-map-North-Atlantic-Current.jpg" alt="" />
                        <div>
                            <h5>North Atlantic Current (NAC)</h5>
                            <p>Atlantic ocean</p>
                            <p>The North Atlantic Current (NAC), also known as North Atlantic Drift and North Atlantic Sea Movement, is a powerful warm western boundary current within the Atlantic Ocean that extends the Gulf Stream northeastward.</p>
                            <p style={{ color: 'red' }}>Warm</p>
                        </div>
                    </div>
                </div> : index === 2 ? <div className="tabpanel" >
                    <div className="cardOfPanel">
                        <img src="https://i0.wp.com/eos.org/wp-content/uploads/2019/08/Chapter-1-Figure-1.1b.png?resize=390%2C316&ssl=1" alt="" />
                        <div>
                            <h5>Kuroshio Current</h5>
                            <p>Pacific ocean</p>
                            <p>The Kuroshio Current (黒潮), also known as the Black or Japan Current (日本海流, Nihon Kairyū) or the Black Stream, is a north-flowing, warm ocean current on the west side of the North Pacific Ocean basin. It was named for the deep blue appearance of its waters.</p>
                            <p style={{ color: 'red' }}>Warm</p>
                        </div>
                    </div>
                    <div className="cardOfPanel">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Spring_Bloom_Colors_the_Pacific_Near_Hokkaido.jpg/220px-Spring_Bloom_Colors_the_Pacific_Near_Hokkaido.jpg" alt="" />
                        <div>
                            <h5>Oyashio Current</h5>
                            <p>Pacific ocean</p>
                            <p>Oyashio (親潮, "Parental Tide"), also known as Oya Siwo, Okhotsk or the Kurile current, is a cold subarctic ocean current that flows south and circulates counterclockwise in the western North Pacific Ocean.</p>
                            <p style={{ color: 'blue' }}>Cold</p>
                        </div>
                    </div>
                </div> : <div className="tabpanel" >
                    <div className="cardOfPanel">
                        <img src="https://i0.wp.com/eos.org/wp-content/uploads/2019/08/Chapter-1-Figure-1.1b.png?resize=390%2C316&ssl=1" alt="" />
                        <div>
                            <h5>Kuroshio Current</h5>
                            <p>Pacific ocean</p>
                            <p>The Kuroshio Current (黒潮), also known as the Black or Japan Current (日本海流, Nihon Kairyū) or the Black Stream, is a north-flowing, warm ocean current on the west side of the North Pacific Ocean basin. It was named for the deep blue appearance of its waters.</p>
                            <p style={{ color: 'red' }}>Warm</p>
                        </div>
                    </div>
                    <div className="cardOfPanel">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Spring_Bloom_Colors_the_Pacific_Near_Hokkaido.jpg/220px-Spring_Bloom_Colors_the_Pacific_Near_Hokkaido.jpg" alt="" />
                        <div>
                            <h5>Oyashio Current</h5>
                            <p>Pacific ocean</p>
                            <p>Oyashio (親潮, "Parental Tide"), also known as Oya Siwo, Okhotsk or the Kurile current, is a cold subarctic ocean current that flows south and circulates counterclockwise in the western North Pacific Ocean.</p>
                            <p style={{ color: 'blue' }}>Cold</p>
                        </div>
                    </div>
                </div>}
            </div>

        </div>
    )
}

export default MoonPage