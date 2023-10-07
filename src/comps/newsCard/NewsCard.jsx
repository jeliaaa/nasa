import React, { useState } from 'react'
import './newscard.scss';
import { Button, Modal } from 'react-bootstrap';
import BEST from '../../img/best.jpg'
import BEST2 from '../../img/best2.jpg'
const NewsCard = ( {id} ) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='news_card'>
            <div className="img_wrapper">
                {id === 1 ? <img src={BEST} alt="" /> : <img src={BEST2} alt="" /> }
            </div>
            <div className='content'>
                <h6>25.02.12</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti sequi voluptatem dolorem aliquid dolor porro inventore nesciunt! Incidunt iste optio reiciendis sint ad, quos dicta suscipit animi exercitationem ullam id, esse dolore cumque fugiat quibusdam illo! Commodi fugiat, veniam porro perspiciatis exercitationem rerum magni.</p>
            </div>
            <div className="actions">
                <button className='commentar_btn' onClick={handleShow}>
                    Comment
                </button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='commentar'>
                        <textarea style={{ width: '100%' }} cols={30} rows={10} />
                    </div>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} style={{ marginLeft: 15 }}>Add Comment</Button>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default NewsCard