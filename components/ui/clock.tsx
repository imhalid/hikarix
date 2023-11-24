'use client'
import React, { useState, useEffect, Suspense } from 'react';

const Clock = () => {
 const [time, setTime] = useState(new Date());

 useEffect(() => {
  const timer = setInterval(() => {
   setTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
 }, []);

 const formatTime = (time: Date) => {
  return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
 };

 return (
  <Suspense fallback={<div>Loading...</div>}>
   <div>{formatTime(time)}</div>
  </Suspense>
 )
};

export default Clock;