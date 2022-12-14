import useStore from './store/store'
import React from 'react'
import Nav from './components/nav'



function App() {

  const dark = useStore((state => state.darkmode))
  const addCount = useStore((state) => state.increment)
  const subtractCount = useStore((state) => state.decrement)
  const count = useStore((state) => state.count)

  document.title = 'zustand test'
  console.log(dark)

  return (
    <>
    <Nav />
      <div className={dark ? "flex justify-center items-center w-screen h-screen" : 'bg-slate-500 text-white flex justify-center items-center w-screen h-screen'}>
        <div className='justify-center items-center w-auto h-auto'>
          <p className="text-[4rem] ml-4 ">Hello Tailwind ඞ</p>
          <div className='flex justify-center items-center'>
            <p className='text-[2rem] '>Count is : {count}</p>
          </div>
          <div className='flex justify-center m-4 p-4 items-center'>
            <button className='text-[2rem] ml-4 h-[2.5rem] w-[2.5rem] ' onClick={addCount}> + </button>
            <button className='text-[2rem] ml-4 h-[2.5rem] w-[2.5rem] ' onClick={subtractCount}> - </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
