import React, { useEffect, useState } from 'react'
import { getParticles } from '../store/particleSlice'
import { useDispatch, useSelector } from 'react-redux'
import Particlelist from '../components/particlelist'

function PartiCles() {
  // const OPTIONS = [
  //   { value: '서울', name: '서울'},
  //   { value: '인천', name: '인천'},
  //   { value: '제주', name: '제주'},
  // ]
 const [sidoname, setSidoname] = useState('전국')
  const handleChange = (e) => {
		// event handler
    setSidoname(e.target.value)
	};
    const dispatch = useDispatch()
    const {data, loading} = useSelector((state) => state.particles)
    useEffect(() => {
        dispatch(getParticles(sidoname))
    }, [sidoname])
  console.log(sidoname)
  if (loading) return <p>Loading...</p>
  return (
    <div>
      <select onChange={handleChange}>
        <option key="전국" value="전국">전국</option>
        <option key="서울" value="서울">서울</option>
        <option key="인천" value="인천">인천</option>
        <option key="제주" value="제주">제주</option>
		  </select>
        <Particlelist data={data}/>
    </div>
  )
}

export default PartiCles