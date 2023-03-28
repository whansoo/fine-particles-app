import React, { useState } from 'react'
import { Container, Title, SubTitle, Icon } from './StyleParticleList';
import { wisha } from '../store/particleSlice'
import { useDispatch } from 'react-redux';

function ParticleAreaDetail({data}) {
    const [stationname, setStationame] = useState('계산')
    const dispatch = useDispatch()
    const handleChange = (e) => {
          setStationame(e.target.value)
      };
      
      const findstation = (element) => {
        if(element.stationName === stationname)
        return true;
      }
      
      const newdata = data.items?.find(findstation)
      const CheckHandler = (id) => {
       
      const a = data.items?.map(item => item.id === id ? ({...item, checked: !item.checked}) : item).filter((item => item.id === id))
      dispatch(wisha(...a))
      }
      const onClick = (id) => {
        CheckHandler(id)
      }
     
  return (
    <div>
        <div>
        <span>인천</span>
        <select onChange={handleChange}>
        {data.items?.map((element) => 
        <option key={element.stationName} value={element.stationName}>{element.stationName}</option>
        )}
        
        </select>
        </div>
        {newdata? 
       <Container key={newdata.id} grade={newdata.pm10Grade}>
       <Title>{newdata.stationName}</Title>
       <Title>{newdata.sidoName}</Title>
       <Icon onClick={() => onClick(newdata.id)}>
         {newdata.checked ?
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clipRule="evenodd" fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
      </svg>
        : 
       <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
       }
       </Icon> 
       <p>{newdata.pm10Grade}</p>
       {newdata.pm10Grade === '1'?  <SubTitle>좋음</SubTitle> :  
       (newdata.pm10Grade === '2'?  <SubTitle>보통</SubTitle> : 
       (newdata.pm10Grade === '3'?  <SubTitle>한때나쁨</SubTitle> : 
       (newdata.pm10Grade === '4'?  <SubTitle>나쁨</SubTitle> : 
       (newdata.pm10Grade === '5'?  <SubTitle>매우나쁨</SubTitle> : <SubTitle>알수없음</SubTitle>)) )) }
       <SubTitle>미세먼지 수치 : {newdata.pm10Value}</SubTitle>
       <SubTitle>{newdata.dataTime} 기준</SubTitle>
    </Container>
    :
    <div>지역을 선택 해주세요!</div>
  } 

    </div>
  )
}

export default ParticleAreaDetail