import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  
useEffect(() => {
    setInterval(
        () => {
            setTime(x => x + 1 )
        }
        ,1000)
})

  return (
    <>
      <h1>Time: {time}</h1>
    </>
  );
}