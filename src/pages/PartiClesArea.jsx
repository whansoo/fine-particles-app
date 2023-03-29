import React, { useEffect, useState } from 'react'
import { getParticles } from '../store/particleSlice'
import { useDispatch, useSelector } from 'react-redux'
import ParticleAreaDetail from '../components/ParticleAreaDetail'
import { SidoName } from '../data/NameData'
function PartiClesArea() {
    const {data, loading} = useSelector((state) => state.particles)
    const [sidoname, setSidoname] = useState('전국')
    const dispatch = useDispatch()

    const handleChange = (e) => {
      
      setSidoname(e.target.value)
    };
    useEffect(() => {
        dispatch(getParticles(sidoname))
    }, [sidoname])

  if (loading) return <p>Loading...</p>
  return (
    <div>
      <select onChange={handleChange}>
        {SidoName.map((item) => (
        <option key={item} value={item}>{item}</option>
        ))}
		  </select>
      {data.items && <ParticleAreaDetail data={data}/>}
    </div>
  )
}

export default PartiClesArea