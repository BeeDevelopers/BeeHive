'use client';

import { SideBar } from './components/Sidebar';
import { Icon } from '@iconify/react';

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen bg-beeblack text-white">
      <SideBar />
      {/* main section */}
      <div className="flex flex-col w-full min-h-screen items-center px-64 py-32">
        {/* form */}
        <div className="flex flex-col w-full max-w-[1200px] gap-8">
          <h1 className="text-[32px] font-bold">Nuevo Evento</h1>
          <div className="flex flex-col w-full gap-6">
            <div className="flex w-full gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-[20px] font-bold">Portada</p>
                <div className="flex flex-col aspect-video w-[570px] bg-white/5 items-center justify-center gap-2 rounded">
                  <Icon icon="ion:image" className="text-[#808080] text-[80px]" />
                  <p className="text-center text-[16px] leading-5 text-[#808080]">
                    Sube una imagen <br /> representativa del evento
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-6">
                <div className="flex flex-col w-full gap-2">
                  <p className="text-[20px] font-bold">Fecha del evento</p>
                  <input
                    type="date"
                    className="w-full bg-white/5 text-white text-[16px] placeholder:text-[#808080] focus:outline-none focus:ring focus:ring-yellow-400 p-2 rounded"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <p className="text-[20px] font-bold">Organizadores</p>
                  <input
                    placeholder="Añade o crea un organizador"
                    className="w-full bg-white/5 text-white text-[16px] placeholder:text-[#808080] focus:outline-none focus:ring focus:ring-yellow-800 p-2 rounded"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <p className="text-[20px] font-bold">Etiquetas</p>
                  <input
                    placeholder="Añade o crea una etiqueta"
                    className="w-full bg-white/5 text-white text-[16px] placeholder:text-[#808080] focus:outline-none focus:ring focus:ring-yellow-800 p-2 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <p className="text-[20px] font-bold">Titulo</p>
              <input
                placeholder="Titulo del evento"
                className="w-full bg-white/5 text-white text-[16px] placeholder:text-[#808080] focus:outline-none focus:ring focus:ring-yellow-800 p-2 rounded"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <p className="text-[20px] font-bold">Resumen</p>
              <input
                placeholder="Resumen del evento (Maximo 200 caracteres)"
                className="w-full bg-white/5 text-white text-[16px] placeholder:text-[#808080] focus:outline-none focus:ring focus:ring-yellow-800 p-2 rounded"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <p className="text-[20px] font-bold">Ubicación</p>
              <div className="flex gap-2">
                <input
                  placeholder="Ubicación del evento"
                  className="w-full bg-white/5 text-white text-[16px] placeholder:text-[#808080] focus:outline-none focus:ring focus:ring-yellow-800 p-2 rounded"
                />
                <input
                  placeholder="Indicaciones adicionales (Numero de salon, edificio, etc.)"
                  className="w-full bg-white/5 text-white text-[16px] placeholder:text-[#808080] focus:outline-none focus:ring focus:ring-yellow-800 p-2 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <p className="text-[20px] font-bold">Cuerpo</p>
              <textarea
                placeholder="Agrega texto e imagenes sobre el evento"
                className="w-full bg-white/5 text-white text-[16px] placeholder:text-[#808080] focus:outline-none focus:ring focus:ring-yellow-800 p-2 rounded h-[400px] resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
