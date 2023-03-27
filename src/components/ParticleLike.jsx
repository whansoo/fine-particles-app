import React from 'react'
import { useSelector } from 'react-redux'
import { Title } from './StyleParticleList';

function ParticleLike() {
    const wish = useSelector((state) => state.particles.wish);
    // const a = wish.map((item,index) => item[index][index])
    console.log(wish)
  return (
    <div>
        {wish?.map((item) => (
              <div key={item.id}>
                <Title>{item.stationName}</Title>
                <Title>{item.sidoName}</Title>
              </div>
        ))
    
        }
    </div>
  )
}

export default ParticleLike