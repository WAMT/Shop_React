import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
// let YellowBtn = styled.button`
//     background: yellow;
//     color: black;
//     padding: 10px;
// `;

function Detail(props) {
    let { id } = useParams();
    let finded = props.art.find((x) => x.id == id);
    let [visible, setVisible] = useState(true);
    let [num, setNum] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 2000);
    }, []);
    useEffect(() => {
        if (isNaN(num)) {
            alert('한글쓰지마라');
        }
    }, [num]);
    return (
        <div className='container'>
            <div>
                {visible == true ? (
                    <div className='alert alert-warning'>
                        2초 이내 구매시 할인
                    </div>
                ) : null}
            </div>

            <input
                onChange={(e) => {
                    setNum(e.target.value);
                }}
            ></input>
            <div className='row'>
                <div className='col-top-1'>
                    <img src={finded.src} width='100%' />
                </div>
                <div className='col-top-1'>
                    <h4 className='pt-5'>{finded.title}</h4>
                    <p>{finded.content}</p>
                    <p>가격: OFFER</p>
                    <button className='btn btn-danger'>주문하기</button>
                </div>
            </div>
        </div>
    );
}
export default Detail;
