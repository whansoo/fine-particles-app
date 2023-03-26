import React from 'react'

function Particlelist({ data }) {
  const { items } = data;
  
  return (
    <div>
      {items?.map((item) => (
        <div key={item.index}>
           <p>{item.stationName}</p>
        </div>
      ))}
    </div>
  )
}

export default Particlelist