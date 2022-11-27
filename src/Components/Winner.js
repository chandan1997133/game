import React, { useEffect, useState } from 'react'
import '../App.css';
import pic from '../image/well 2.png';

function Winner() {
  const [Gift, setGift] = useState('');
  const [Cupon, setCupon] = useState('');

  useEffect(() => {
    const gift = (sessionStorage.getItem('prize'));
    if (gift) {
      setGift(gift);
    }
    const cupon =(sessionStorage.getItem('cupon'));
    if (cupon) {
      setCupon(cupon);
    }
  }, []);

  const handleCopy =()=>{
    navigator.clipboard.writeText(Cupon);
    alert("Copied")
  }

  return (
    <div className='winnnerGame'>
      <div className='main'>
        <div className='fhalf'>
          <img src={pic} alt="SpinImage" />
        </div>
        <div className='rhalf'>
          <p>Congrates! You won</p>
          <h1>{Gift}</h1>
          <input type="text" value={Cupon} />
          <button className='copybtn' onClick={handleCopy}>Copy</button>
          <br></br><br></br>
          <button className='btn' >Continiue & Use Discount</button><br></br>
          <p >Cuppon valid untill only 2 hour</p>
        </div>
      </div>
    </div>
  )
}

export default Winner;
