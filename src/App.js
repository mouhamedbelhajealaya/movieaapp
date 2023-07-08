import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBars} from '@fortawesome/free-solid-svg-icons'
// import star from './star';
// import Show from './Show';
//  import starRatingComponent from 'react-star-rating-component'
 import { keyboard } from '@testing-library/user-event/dist/keyboard';


function App() {
  const[list,setlist]=useState([
    
    {name:"breaking bad",imgsr:"https://th.bing.com/th/id/OIP.9qwzG2DW9Bo4aor8afRnjQAAAA?pid=ImgDet&rs=1",rate:"9.5"},
    {name:"game of thrones",imgsr:"https://th.bing.com/th/id/OIP.lKpFxgZ-jNULlsim7p_PgAHaK-?pid=ImgDet&rs=1",rate:"9"},
    {name:"see",imgsr:"https://th.bing.com/th/id/OIP.d_EMBjO9ThsJc-U9oag6GwHaLH?pid=ImgDet&rs=1",rate:"8.5"},
  ])
  const [filtredlist,setFilter]=useState(list)

 useEffect(()=>{
  setFilter(list)
},[list])


  const search=useRef()
  const filtrer=()=>{

    setFilter( list.filter(e=> e.name.toUpperCase().includes(search.current.value.toUpperCase())))

  }

  const p=useRef()
  const p2=useRef()
  const p3=useRef()


  const add=()=>{
    setlist([...list,
    {
      name:p.current.value,
      imgsr:p3.current.value,
      rate:p2.current.value,
      
    }
  ])
  }
  const [rating,setRate]=useState(0)
  const onStarClick=(x)=>{

    setFilter( list.filter(e=> e.rate>=x))

  }
  return (
    <div className="App">  
    <div className='navebar'>
    <h1 className='titer'>NETFLIX</h1>
    <input type={"search"} placeholder="enter your search" ref={search} onChange={filtrer}></input>
     
    <starRatingComponent
      name="ratel"
      starCount={5}
      value={rating}
      onStarClick={onStarClick}      
      />

    <div className='inputt'>


        {/* <FontAwesomeIcon icon={faBars} className='FontAwesomeIcon' /> */}
        <br></br>
        <input  type={"text"} ref={p} placeholder="name movie"></input>
        <input type={"text"} ref={p2} placeholder="name rate"></input>
        <input type={"text"} ref={p3} placeholder="image link"></input>
      
        <button  onClick={add}>+</button>
    
    </div>
    </div>
    <dr/>
  
  <div className='movielist'>
  {filtredlist.map(e=>

  <p className='moie-item'>
    <img className='imag-item' src= {e.imgsr}></img>
    <div>    
    {e.name}
    <br/>
    {e.rate}
     
    </div>
      </p>

      )}
  </div>

    </div>  
  );
}

export default App;
