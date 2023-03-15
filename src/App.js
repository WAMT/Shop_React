import axios from 'axios';
import { useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'; //
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import data from './data.js';
import Detail from './Detail.js';

function App() {
    let [art, setArt] = useState(data);

    let navigate = useNavigate();

    return (
        <div className='App'>
            <Navbar bg='light' variant='light' className='Navbar'>
                <Container>
                    <Navbar.Brand href='#home'>일시불</Navbar.Brand>
                    <Nav className='me-auto' className='Navi'>
                        <Nav.Link
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            홈
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/About');
                            }}
                        >
                            찾아보기
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/Detail');
                            }}
                        >
                            더보기
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/Event');
                            }}
                        >
                            이벤트
                        </Nav.Link>
                        {/* <Link to='/'>홈</Link>
                        <Link to='/Detail'>더보기</Link> */}
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <div className='Main-bg'></div>
                            <Container>
                                <Row className='row'>
                                    {art.map((a, i) => {
                                        return <MidArt art={art[i]}></MidArt>;
                                    })}
                                </Row>
                            </Container>
                        </>
                    }
                />
                <Route path='/Detail/:id' element={<Detail art={art} />} />

                <Route path='*' element={<div>없는페이지 입니다.</div>} />

                <Route path='About' element={<About />}>
                    <Route path='member' element={<div>멤버</div>} />
                    <Route path='location' element={<div>지역</div>} />
                </Route>

                <Route
                    path='/Event'
                    element={
                        <div>
                            오늘의 이벤트 <Outlet></Outlet>
                        </div>
                    }
                >
                    <Route path='one' element={<div>양배추즙</div>} />
                    <Route path='two' element={<div>생일이에요</div>} />
                </Route>
            </Routes>
            <button
                onClick={() => {
                    axios
                        .get('https://codingapple1.github.io/shop/data2.json')
                        .then((result) => {
                            let copy = [...art, ...result.data];
                            setArt(copy);
                            // setArt(art.concat(result.data));
                        })
                        .catch(() => {
                            console.log('error');
                        });
                }}
            >
                버튼
            </button>
        </div>
    );
}
function MidArt(props) {
    return (
        <Col className='col-top-1'>
            <img src={props.art.src} width='80%' height='65%' />
            <h4>{props.art.title}</h4>
            <p>{props.art.content}</p>
            <p>{props.art.id}</p>
        </Col>
    );
}
function MidArt2(props) {
    return (
        <Col className='col-top-1'>
            <h4>{props.art2.title}</h4>
            <p>{props.art2.content}</p>
            <p>{props.art2.id}</p>
        </Col>
    );
}
function About() {
    return (
        <div>
            <h4>회사정보</h4>
            <Outlet></Outlet>
        </div>
    );
}
export default App;
