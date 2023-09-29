import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './forum.scss'
const ForumPg = () => {
    const {id} = useParams();
  return (
    <Container className='forumSingle'>
        <h4>შეკითხვა ნომერი - {id}</h4>
        <div className='description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odit! Quasi ab autem iure. Inventore architecto eius ab quia officia accusantium ipsam molestias incidunt possimus modi ipsa placeat numquam autem perferendis accusamus unde ratione voluptate voluptatum, dolor minus corporis obcaecati ea repellat distinctio? Perferendis assumenda doloremque exercitationem dolorum modi possimus sit laboriosam dolor id asperiores nam ratione nemo non error molestiae suscipit, amet odit magnam minima. Reiciendis cupiditate, recusandae officia pariatur quidem non tempora commodi voluptate iste praesentium modi odio! Officia quidem consectetur nemo placeat? Nostrum, quas earum, dignissimos accusantium sapiente mollitia tempora laborum obcaecati unde ab alias voluptatum cupiditate?</p>
        </div>
        <Container className='answers'>
            <h4>კომენტარები</h4>
            <hr />
            <div className='coms_page'>
                <div className='comm'>
                    <div className="profileOfCom">
                        <img src="https://picsum.photos/100" alt="" />
                        <p>username123</p>
                    </div>
                    <div className="contentOfCom">
                        <p>sianteresoa! dzalian mogvewona, mteli ojaxi giyurebt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic similique id laborum ipsa voluptas beatae enim commodi ab sunt ullam dolores mollitia officia cumque aliquam deleniti illo corporis, eius reprehenderit ducimus optio eos velit rem? Non id libero reiciendis repellendus, eaque assumenda aliquam! Omnis explicabo id cumque vitae dolores esse impedit deleniti! Officiis quas voluptate magni! Distinctio illo est dolores eaque adipisci voluptatum iste autem error. Eveniet, placeat natus consequatur aut ex architecto non libero tenetur magnam, eaque sunt. Praesentium commodi placeat, reiciendis voluptatem voluptas quasi fugit iure et labore culpa nisi natus consequuntur similique recusandae numquam eligendi cupiditate quia.</p>
                    </div>
                </div>
                <div className='comm'>
                    <div className="profileOfCom">
                        <img src="https://picsum.photos/100" alt="" />
                        <p>username123</p>
                    </div>
                    <div className="contentOfCom">
                        <p>sianteresoa! dzalian mogvewona, mteli ojaxi giyurebt </p>
                    </div>
                </div>
                <div className='comm'>
                    <div className="profileOfCom">
                        <img src="https://picsum.photos/100" alt="" />
                        <p>username123</p>
                    </div>
                    <div className="contentOfCom">
                        <p>sianteresoa! dzalian mogvewona, mteli ojaxi giyurebt</p>
                    </div>
                </div>
                <div className='comm'>
                    <div className="profileOfCom">
                        <img src="https://picsum.photos/100" alt="" />
                        <p>username123</p>
                    </div>
                    <div className="contentOfCom">
                        <p>sianteresoa! dzalian mogvewona, mteli ojaxi giyurebt</p>
                    </div>
                </div>
                <div className='comm'>
                    <div className="profileOfCom">
                        <img src="https://picsum.photos/100" alt="" />
                        <p>username123</p>
                    </div>
                    <div className="contentOfCom">
                        <p>sianteresoa! dzalian mogvewona, mteli ojaxi giyurebt</p>
                    </div>
                </div>
                <div className='comm'>
                    <div className="profileOfCom">
                        <img src="https://picsum.photos/100" alt="" />
                        <p>username123</p>
                    </div>
                    <div className="contentOfCom">
                        <p>sianteresoa! dzalian mogvewona, mteli ojaxi giyurebt</p>
                    </div>
                </div>
            </div>
        </Container>
    </Container>
  )
}

export default ForumPg