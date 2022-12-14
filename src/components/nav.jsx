import React from 'react'
import useStore from '../store/store'

function nav() {
  const darkmode = useStore((state => state.darkmode))
  const changeDark = useStore((state => state.changeDark))
  const changeLight = useStore((state => state.changeLight))
  return (
    <div className='flex justify-between items-center text-white bg-slate-600 w-screen h-[3.5rem]'>
      <div>
        <a className='ml-6'>Home</a>
        <a className='ml-4'>About</a>
        <a className='ml-4'>Contact</a>
        <a className='ml-4'>Sign in</a>
      </div>
      <div className='flex'>
        <div className={darkmode ? 'hidden' : ''}><button className='bg-white text-black m-2 rounded-lg p-1 shadow-2xl' onClick={changeDark}>Lightmode</button></div>
        <div className={!darkmode ? 'hidden' : ''}><button className='bg-white text-black m-2 rounded-lg p-1 shadow-2xl' onClick={changeLight}>Darkmode</button></div>
      </div>
    </div>
  )
}

export default nav