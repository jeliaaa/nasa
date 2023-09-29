import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './feed.scss'

const Feed = () => {
    return (
        <div style={{width: '100%', display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap: 40, padding: 20}}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
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
                </Link>
            ))}
        </div>
    )
}

export default Feed