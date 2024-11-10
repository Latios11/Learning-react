import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-200'
     style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button className='outline-none px-4 rounded-lg shadow-lg bg-red-700' onMouseEnter={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 rounded-lg shadow-lg bg-green-600' onMouseEnter={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 rounded-lg shadow-lg bg-blue-600'onMouseEnter={() => setColor("blue")}>Blue</button>
          <button className='outline-none px-4 rounded-lg shadow-lg bg-yellow-400'onMouseEnter={() => setColor("yellow")}>yellow</button>
          <button className='outline-none px-4 rounded-lg shadow-lg bg-orange-600' onMouseEnter={() => setColor("orange")}>Orange</button>
          <button className='outline-none px-4 rounded-lg shadow-lg bg-white' onMouseEnter={() => setColor("white")}>white</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default App
