import React from 'react'
import { useSelector } from 'react-redux';

function Intro() {
  const {portfolioData} = useSelector((state) => state.root);
  const {intro} = portfolioData;
  const {welcomeText , firstName , lastName , description , caption} = intro;
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 sm:h-[88vh]'>
      <h1 className='text-white font-semibold mt-5 sm:mt-14'>{welcomeText || ""}</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>{firstName || ""} {lastName || ""}</h1>
      <h1 className='text-7xl sm:text-3xl text-white font-semibold'>{caption || ""}</h1>
      <p className='text-white w-2/3'>
      {description || ""}
      </p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro