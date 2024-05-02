'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Icon } from '@iconify/react';

interface SidebarButtonProps {
  icon: string;
  text: string;
  href?: string;
  selected: boolean;
  onClick: () => void;
}

const sidebarButtons = [
  {
    icon: 'ph:chart-line-bold',
    text: 'Estadísticas',
    href: '/estadisticas',
  },
  {
    icon: 'fluent:calendar-ltr-12-filled',
    text: 'Eventos',
    href: '/eventos',
  },
  {
    icon: 'fluent:people-team-32-filled',
    text: 'Comunidad',
    href: '/comunidad',
  },
  {
    icon: 'iconoir:post-solid',
    text: 'Posts',
    href: '/posts',
  },
  {
    icon: 'solar:shop-bold',
    text: 'Tienda',
    href: '/tienda',
  },
];

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, href = '/', text, selected, onClick }) => {
  return (
    <Link
      href={href}
      className={classNames(
        'flex items-center gap-2 px-3 py-2 text-gray-300 focus:outline-beeyellow text-lg font-bold rounded transition-all duration-75',
        { 'bg-beeblack': selected }
      )}
      onClick={onClick}
    >
      <Icon icon={icon} />
      {text}
    </Link>
  );
};

/* Main component: */

export function SideBar() {
  const [selectedButton, setSelectedButton] = useState('Inicio');

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  return (
    <div className="flex flex-col w-80 bg-[#050505] h-screen gap-6 p-6 top-0 sticky">
      <Link href="/" className="flex w-full items-center gap-4">
        <div className="relative aspect-square h-7">
          <Image src="/images/logo_icon.webp" alt="logo" quality={100} priority fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="relative aspect-[11/1] h-4">
          <Image src="/images/logo_text.webp" alt="logo" quality={100} priority fill style={{ objectFit: 'contain' }} />
        </div>
      </Link>
      <div className="flex flex-col w-full h-full">
        {sidebarButtons.map((button) => (
          <SidebarButton
            key={button.text}
            icon={button.icon}
            text={button.text}
            href={button.href}
            selected={selectedButton === button.text}
            onClick={() => handleButtonClick(button.text)}
          />
        ))}
      </div>
      <SidebarButton
        icon="uis:signout"
        text="Cerrar sesion"
        selected={selectedButton === 'Cerrar sesion'}
        onClick={() => handleButtonClick('Cerrar sesion')}
      />
    </div>
  );
}
