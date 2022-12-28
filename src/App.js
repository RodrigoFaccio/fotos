/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import f1 from './fotos/1.jpeg'
import f2 from './fotos/2.jpeg'
import f3 from './fotos/3.jpeg'
import f4 from './fotos/4.jpeg'
import f5 from './fotos/5.jpeg'
import f6 from './fotos/6.jpeg'
import f7 from './fotos/7.jpeg'
import f8 from './fotos/8.jpeg'
import f9 from './fotos/9.jpeg'
import f10 from './fotos/10.jpeg'
import f11 from './fotos/11.jpeg'
import f12 from './fotos/12.jpeg'
import f13 from './fotos/13.jpeg'
import f14 from './fotos/14.jpeg'
import f15 from './fotos/15.jpeg'
import f16 from './fotos/16.jpeg'
import f17 from './fotos/17.jpeg'
import f18 from './fotos/18.jpeg'
import f19 from './fotos/19.jpeg'
import f20 from './fotos/20.jpeg'
import f21 from './fotos/21.jpeg'
import f22 from './fotos/22.jpeg'


import {AiOutlineReload} from 'react-icons/ai'

import { useEffect, useState } from 'react';

function App() {
  const [reload,setReload] = useState(false);
  const [path,setPath] = useState(false);
  const [numero,setNumero] = useState(false);



  useEffect(() => {
    const number = Math.floor(Math.random() * 22);
    setNumero(number)
    if(number===0){
      setReload(!reload)
    }
    if(number===numero){
      setReload(!reload)
    }
    console.log(number)
    if(number===1){
      setPath(f1)
    }else if(number===2){
      setPath(f2)
    }else if(number===3){
      setPath(f3)
    }else if(number===4){
      setPath(f4)
    }else if(number===5){
      setPath(f5)
    }else if(number===6){
      setPath(f6)
    }else if(number===7){
      setPath(f7)
    }else if(number===8){
      setPath(f8)
    }else if(number===9){
      setPath(f9)
    }else if(number===10){
      setPath(f10)
    }else if(number===11){
      setPath(f11)
    }else if(number===12){
      setPath(f12)
    }else if(number===13){
      setPath(f13)
    }else if(number===14){
      setPath(f14)
    }else if(number===15){
      setPath(f15)
    }else if(number===16){
      setPath(f16)
    }else if(number===17){
      setPath(f17)
    }else if(number===18){
      setPath(f18)
    }else if(number===19){
      setPath(f20)
    }else if(number===20){
      setPath(f20)
    }else if(number===21){
      setPath(f21)
    }else if(number===22){
      setPath(f22)
    }
    
    
   
  }, [reload]);
  return (
    <div className="App">
    <p>Para os momentos com minha gatinha ❤️</p>
     <img src={path} className='foto' alt='foto'/>
     <AiOutlineReload 
     onClick={()=>setReload(!reload)} size={80} color={'white'} 
     fontWeight={400} style={{marginTop:20,fontWeight:'bolder'}}/>
    </div>
  );
}

export default App;
