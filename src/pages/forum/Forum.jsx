import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './forum.scss'
const Forum = () => {
    return (
        <div className='forum_wrap'>
            <Container>
                <div className='forum'>
                    <Accordion  style={{width:'100%'}}>
                        <Accordion.Item style={{width:'100%'}} eventKey="0">
                            <Accordion.Header> <div className='q_wrap'></div>What should we do to save our oceans?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure nobis inventore voluptatum reprehenderit asperiores
                                laboriosam earum, ut laborum iusto eius amet veritatis sequi assumenda similique minima quas
                                corporis. Nisi sequi unde laborum, facilis ex repudiandae animi nostrum modi exercitationem soluta ratione, ducimus maxime!
                                <button><Link to={'1'}>ვრცლად</Link></button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion style={{width:'100%'}}>
                        <Accordion.Item style={{width:'100%'}} eventKey="1">
                            <Accordion.Header><div className='q_wrap'></div>What is a situation around the world right now?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolor provident, consectetur cupiditate, magnam ea vel quam dignissimos quos
                                dolore rem at neque tempore modi omnis? Minus deleniti facere asperiores porro dolore itaque sit eligendi deserunt quisquam beatae? Veritatis, expedita.
                                <button><Link to={'2'}>ვრცლად</Link></button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion style={{width:'100%'}}>
                        <Accordion.Item style={{width:'100%'}} eventKey="2">
                            <Accordion.Header><div className='q_wrap'></div>Which species are endangered around the world?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                <button><Link to={'3'}>ვრცლად</Link></button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion style={{width:'100%'}}>
                        <Accordion.Item style={{width:'100%'}} eventKey="3">
                            <Accordion.Header><div className='q_wrap'></div>How can I become a member of environemntalist's group?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                <button><Link to={'4'}>ვრცლად</Link></button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion style={{width:'100%'}}>
                        <Accordion.Item style={{width:'100%'}} eventKey="4">
                            <Accordion.Header><div className='q_wrap'></div>Ocean currents/winds</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                <button><Link to={'5'}>ვრცლად</Link></button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion style={{width:'100%'}}>
                        <Accordion.Item style={{width:'100%'}} eventKey="5">
                            <Accordion.Header><div className='q_wrap'></div>What are the most exotic species around the world?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                <button><Link to={'6'}>ვრცლად</Link></button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>

        </div >
    )
}

export default Forum