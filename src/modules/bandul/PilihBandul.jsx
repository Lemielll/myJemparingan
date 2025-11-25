import React from 'react'
import batikBlur from '/src/assets/batikblur.png'

function PilihBandul() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const namaSesi = fd.get('nama-sesi')
    const bandul = fd.get('bandul')
    alert(`Nama sesi: ${namaSesi || '-'}\nBandul: ${bandul || 'Belum pilih'}`)
  }

  return (
    <div className='relative min-h-screen flex flex-col bg-[#FFFAF0]'>
      {/* Fixed background image at bottom */}
      <div 
        className='fixed bottom-0 w-screen h-96 pointer-events-none'
        style={{
          backgroundImage: `url(${batikBlur})`,
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          zIndex: 0
        }}
      />

      {/* Content wrapper */}
      <div className='relative z-10 flex flex-col'>
        <div className='bg-[#D9D9D9] h-[20vh] w-screen'>
          <img src="/src/assets/bandul-banner.png" alt="" className='h-full w-full'/>
        </div>
        <div className='p-4 bg-[#FFFAF0]'>
          <header className='mb-6 pt-4'>
            <h1 className='font-bold text-xl font-poppins'>Pemilihan Sistem Penilaian</h1>
          </header>
          <section className='flex flex-col gap-2'>
            <div>
              <p className='font-bold text-[13px] font-poppins'>Nama sesi</p>
            </div>

            <form onSubmit={handleSubmit} className='font-poppins text-sm w-full'>
              <div className='relative flex items-center mb-2'>
                <img src="/src/assets/name.svg" alt="name" className='absolute ml-3 w-3.5 pointer-events-none' />
                <input type="text" name="nama-sesi" id="nama-sesi" placeholder='jemparingan' className='border-[1.5px] rounded-lg border-[#C4D3DF] w-full p-2 h-10 cursor-text pr-3 pl-8 focus:placeholder:text-gray-300'/>
              </div>

              <div>
                <p className='font-poppins text-[12.5px]'>Menembakkan <span className='font-bold'>4 anak panah</span>/seri dengan maksimal 20 seri untuk 1 sesi.</p>
              </div>

              <div className='flex flex-col gap-4 mt-6'>
                <div className='max-w-6xl'>
                  <input id="bandul-321" type="radio" name="bandul" value="3-2-1" className="sr-only peer" />
                  <label htmlFor="bandul-321" className="border h-[20vh] rounded-md flex flex-row items-center cursor-pointer peer-checked:border-blue-500 peer-checked:border-2 peer-checked:shadow-md">
                    <div className='bg-[#D9D9D9] w-2/6 rounded-l-md flex items-center justify-center h-full'>
                      <img src="/src/assets/321.svg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='p-4 flex h-full flex-col max-w-[65%] gap-2'>
                      <p className='font-bold font-poppins text-lg'>Bandul: 3-2-1</p>
                      <p className='font-poppins text-[10px] leading-4.5'>Skor terdiri dari poin 3, poin 2, poin 1. Bandul ini telah terbagi menjadi 3 bagian yaitu, Molo, Jonggo, dan Awal.</p>
                    </div>
                  </label>
                </div>

                <div className='max-w-6xl'>
                  <input id="bandul-31" type="radio" name="bandul" value="3-1" className="sr-only peer" />
                  <label htmlFor="bandul-31" className="border h-[20vh] rounded-md flex flex-row items-center cursor-pointer peer-checked:border-blue-500 peer-checked:border-2 peer-checked:shadow-md">
                    <div className='bg-[#D9D9D9] w-2/6 rounded-l-md flex items-center justify-center h-full'>
                      <img src="/src/assets/31.svg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='p-4 flex h-full flex-col max-w-[65%] gap-2 bg-linear-90'>
                      <p className='font-bold font-poppins text-lg'>Bandul: 3-1</p>
                      <p className='font-poppins text-[10px] leading-4.5'>Skor terdiri dari poin 3 dan poin 1. Bandul ini telah terbagi menjadi 2 bagian yaitu, Molo dan Awal.</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className='mt-16 flex gap-3 justify-center mb-4'>
                <button type='reset' className='px-4 py-2 rounded-md font-poppins border border-[#0A192F] bg-white text-sm w-full'>Batal</button>
                <button type='submit' className='px-4 py-2 rounded-md font-poppins bg-[#0A192F] text-white text-sm w-full'>Lanjut</button>
              </div>

            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PilihBandul