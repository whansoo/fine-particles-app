import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ParticleLikeDetail from './ParticleLikeDetail';

function ParticleLike() {
 
    const wish = useSelector((state) => state.particles.wish);
    const [checkitems, setCheckitems] = useState(wish)
    
    const CheckHandler = (id) => {
      setCheckitems(checkitems?.map(item => item.id === id ? ({...item, checked: !item.checked}) : item).filter((item => item.id !== id)))
    }
   
    const onClick = (id) => {
      CheckHandler(id)
    }

  return (
  
    <div> 
      {wish? <ParticleLikeDetail checkitems={checkitems} onClick={onClick}/> : <div>즐겨찾기 추가 해주세요!</div>}    
  
    </div> 

  )
}

export default ParticleLike