import React, { useEffect, useState } from 'react'
import { getParticles } from '../store/particleSlice'
import { useDispatch, useSelector } from 'react-redux'
import Particlelist from '../components/particlelist'
import { SidoName } from '../data/NameData'
function PartiCles() {

 const [sidoname, setSidoname] = useState('전국')

  const handleChange = (e) => {
		
    setSidoname(e.target.value)
	};
    const dispatch = useDispatch()
    const {data, loading} = useSelector((state) => state.particles)

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
      {data.items && <Particlelist data={data}/>}
    </div>
  )
}

export default PartiCles