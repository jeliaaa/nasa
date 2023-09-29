import React, { useState } from 'react'
import './newscard.scss';
import { Button, Modal } from 'react-bootstrap';
const NewsCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='news_card'>
            <div className="img_wrapper">
                <img src="https://media.istockphoto.com/id/936349626/photo/fisherman-holding-large-fish.jpg?s=2048x2048&w=is&k=20&c=1qns4MajLImXb778lIkZsz_y_NTh0Rp132hVBv-_d8E=" alt="" />
            </div>
            <div className='content'>
                <h6>25.02.12</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti sequi voluptatem dolorem aliquid dolor porro inventore nesciunt! Incidunt iste optio reiciendis sint ad, quos dicta suscipit animi exercitationem ullam id, esse dolore cumque fugiat quibusdam illo! Commodi fugiat, veniam porro perspiciatis exercitationem rerum magni.</p>
            </div>
            <div className="actions">
                <button className='commentar_btn' onClick={handleShow}>
                    კომენტარი
                </button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>კომენტარის დატოვება</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='commentar'>
                        <textarea style={{ width: '100%' }} cols={30} rows={10} />
                    </div>
                    <Button variant="secondary" onClick={handleClose}>
                        დახურვა
                    </Button>
                    <Button variant="primary" onClick={handleClose} style={{ marginLeft: 15 }}>დამატება</Button>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default NewsCard