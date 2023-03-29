import React from 'react'
import { Container, Grade, Icon, SubTitle, Title } from './StyleParticleList';

function ParticleLikeDetail({checkitems, onClick }) {
  return (
    <div>
         {checkitems?.map((item) => (
        <Container key={item.id} grade={item.pm10Grade}>
           <Title>{item.stationName}</Title>
           <Title>{item.sidoName}</Title>
           <Icon onClick={() => onClick(item.id)}>
             {item.checked ?
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clipRule="evenodd" fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
          </svg>
            : 
           <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
           }
           </Icon> 
           {item.pm10Grade === '1'?  <Grade>좋음</Grade> :  
           (item.pm10Grade === '2'?  <Grade>보통</Grade> : 
           (item.pm10Grade === '3'?  <Grade>한때나쁨</Grade> : 
           (item.pm10Grade === '4'?  <Grade>나쁨</Grade> : 
           (item.pm10Grade === '5'?  <Grade>매우나쁨</Grade> : <Grade>알수없음</Grade>)) )) }
           <SubTitle>미세먼지 수치 : {item.pm10Value}</SubTitle>
           <SubTitle>{item.dataTime} 기준</SubTitle>
        </Container> 
      ))}
    </div>
  )
}

export default ParticleLikeDetail