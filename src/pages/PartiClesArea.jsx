import React, { useEffect, useState } from 'react'
import { getParticle, getParticles } from '../store/particleSlice'
import { useDispatch, useSelector } from 'react-redux'
import ParticleAreaDetail from '../components/ParticleAreaDetail'

function PartiClesArea() {
    const {data, loading} = useSelector((state) => state.particles)
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(getParticles('인천'))
    }, [])

  if (loading) return <p>Loading...</p>
  return (
    <div>
      {data.items && <ParticleAreaDetail data={data}/>}
    </div>
  )
}

export default PartiClesArea