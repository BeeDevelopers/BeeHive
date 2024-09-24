"use client";
import { useState } from "react"


function Header() {

  const [visible, setvisible] = useState(false);

  const clicMenu = (() => {
    // console.log('clic en funcion modificadora del State');
    setvisible(!visible);
  });

  return(
    <header className='relative'>
          <div className='w-full absolute z-30'>
            <div className='container flex justify-between m-auto py-6 md:pl-10'>
              <div className='md:flex'>
                <a href="/" className='flex gap-2'>
                  <img src="/beedevelopers_logo.png" alt="Logotipo" className='w-9 h-auto object-contain'/>
                  <img src="/beedevelopers_text.png" alt="Texto Navegacion" className='w-32 h-auto object-contain'/>
                </a>
              </div>

              <div className="w-8 md:hidden">
                <img src="/menuHamburguesa.png" alt="Menu" className="cursor-pointer" onClick={clicMenu} />
              </div>
              
              <nav className={`${visible ? 'flex flex-col md:flex-row' : 'hidden md:flex flex-col md:flex-row'}`}>
                <a href="#" className='text-white text-xs py-3 px-5 lg:text-xl'>Eventos</a>
                <a href="#" className='text-white text-xs py-3 px-5 lg:text-xl'>Proyectos</a>
                <a href="#" className='text-white text-xs py-3 px-5 lg:text-xl'>Merch</a>
                <a href="#" className='text-white text-xs py-3 px-5 lg:text-xl'>Miembros</a>
                <a href="#" className='text-white text-xs py-3 px-5 lg:text-xl'>Contacto</a>
                <a href="#" className='text-white text-xs py-3 px-5 lg:text-xl'>Blog</a>
              </nav>
            </div>
          </div> {/* .w-full*/}

          <div className='absolute flex items-center justify-center w-full z-20 h-full my-7 md:my-2'>
            <div className='md:w-full max-w-7xl my-0 mx-auto'>
              <h2 className='text-white sm:text-xs md:text-3xl m-0 font-bold pl-10'>Un enjambre de innovación te espera</h2>
              <p className='text-white sm:text-sm  py-1 px-2 m-0 pl-10'>BeeDevelopers, Mente colmena, crecimiento individual.</p>
            </div>
          </div>

          <video autoPlay muted loop className='block w-full object-cover'>
              <source src='/videoTeclado.mp4' type='video/mp4'/>
          </video>
      </header>
  ) 
}

export default Header