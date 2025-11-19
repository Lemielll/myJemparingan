import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#D9D9D9] h-[20vh] w-screen'>
        <img src="" alt="" />
      </div>
      <div className='p-4'>
        <header className='mb-6'>
          <h1 className='font-bold text-xl font-poppins'>Pemilihan Sistem Penilaian</h1>
        </header>
        <section className='flex flex-col gap-3'>
            <div>
              <p className='font-bold text-[13px] font-poppins'>Nama sesi</p>
            </div>

            <form action="" className='font-poppins text-sm'>
              <div className='relative flex items-center '>
                <img src="/src/assets/name.svg" alt="name" className='absolute ml-3 w-3.5 pointer-events-none' />
                <input type="text" name="nama-sesi" id="nama-sesi" placeholder='jemparingan' className='border-[1.5px] 
                rounded-lg border-[#C4D3DF] w-full p-2 h-10 cursor-text pr-3 pl-8 focus:placeholder:text-gray-300'/>
              </div>
            </form>
            <div>
              <p className='font-poppins text-[12.5px]'>Menembakkan <span className='font-bold'>4 anak panah</span>/seri dengan maksimal 20 seri untuk 1 sesi.</p>
            </div>

            <div className='flex flex-col gap-4 mt-6'>
              <div className='border h-[20vh] rounded-md flex flex-row'>
                <div className='bg-[#D9D9D9] w-2/6 rounded-l-md'>

                </div>
                <div className='p-4'>
                  <p className='font-bold font-poppins'>Bandul: 3-2-1</p>
                </div>
              </div>
              <div className='border h-[20vh] rounded-md flex flex-row'>
                <div className='bg-[#D9D9D9] w-2/6 rounded-l-md'>

                </div>
                <div className='p-4'>
                  <p className='font-bold font-poppins'>Bandul: 3-1</p>
                </div>
              </div>
            </div>
        </section>
      </div>

    </>
  )
}

export default App
