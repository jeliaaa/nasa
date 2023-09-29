import React, { useState } from 'react'
import MAP from '../../img/map.png'
import { Button, Modal } from 'react-bootstrap';
const Map = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ position: 'relative' }}>
      <img width={'100%'} src={MAP} alt="" />
      <div onClick={handleShow} style={{ cursor: 'pointer', position: 'absolute', left: 620, width: 20, height: 20, borderRadius: 10, backgroundColor: 'red', bottom: 92 }}></div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#23B5D3'}}>ალი და ნინო</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>განხილვები : 103</h3>
          <ul style={{listStyle:'none'}}>
            <li>საშუალო შეფასება 9.4/10</li>
            <li>ხშირი თევზი : ...</li>
            <li>საუკეთესო ინვენტარი : ...</li>
            <li>შეფასებების ნახვა .</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            დახურვა
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Map