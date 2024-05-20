"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Icon } from "@iconify/react";

interface SidebarButtonProps {
  icon: string;
  text: string;
  href?: string;
  selected: boolean;
  onClick: () => void;
}

export const sidebarButtons = [
  {
    icon: "ph:chart-line-bold",
    text: "Estadísticas",
    href: "/statistics",
  },
  {
    icon: "fluent:calendar-ltr-12-filled",
    text: "Eventos",
    href: "/events",
  },
  {
    icon: "fluent:people-team-32-filled",
    text: "Comunidad",
    href: "/community",
  },
  {
    icon: "iconoir:post-solid",
    text: "Posts",
    href: "/posts",
  },
  {
    icon: "solar:shop-bold",
    text: "Tienda",
    href: "/shop",
  },
];

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, href = "/", text, selected, onClick }) => {
  return (
    <Link
      href={href}
      className={classNames(
        "flex items-center gap-2 px-3 py-2 text-gray-300 focus:outline-beeyellow text-lg font-bold rounded transition-all duration-75",
        { "bg-beeblack": selected }
      )}
      onClick={onClick}>
      <Icon icon={icon} className="w-6 h-6" />
      <span>{text}</span>
    </Link>
  );
};

/* Main component: */

export function SideBar() {
  const [selectedButton, setSelectedButton] = useState("Inicio");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  return (
    <div className="flex flex-col w-80 bg-[#050505] h-screen gap-6 p-6 top-0 sticky z-50">
      <div className="flex justify-start items-center gap-4">
        <Image src="/images/logo_icon.webp" alt="logo" width={50} height={50} />
        <Image src="/images/logo_text.webp" alt="logo" width={120} height={100} />
      </div>
      <div className="flex flex-col h-full">
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
        selected={selectedButton === "Cerrar sesion"}
        onClick={() => handleButtonClick("Cerrar sesion")}
      />
    </div>
  );
}
