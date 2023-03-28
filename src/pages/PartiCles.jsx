import React, { useEffect, useState } from 'react'
import { getParticles, getParticle } from '../store/particleSlice'
import { useDispatch, useSelector } from 'react-redux'
import Particlelist from '../components/particlelist'

function PartiCles() {

 const [sidoname, setSidoname] = useState('전국')

  const handleChange = (e) => {
		
    setSidoname(e.target.value)
	};
    const dispatch = useDispatch()
    const {data, loading, sidonametag} = useSelector((state) => state.particles)

    useEffect(() => {
      dispatch(getParticle('전국'))
        dispatch(getParticles(sidoname))
    }, [sidoname])
   
  if (loading) return <p>Loading...</p>
  return (
    <div>
      <select onChange={handleChange}>
        {sidonametag.items?.filter(
                  (arr, index, callback) =>
                    index ===
                    callback.findIndex((tag) => tag.sidoName === arr.sidoName)
                ).map((element) => 
        <option key={element.sidoName} value={element.sidoName}>{element.sidoName}</option>
        )}
        
		  </select>
      {data.items && <Particlelist data={data}/>}
    </div>
  )
}

export default PartiCles