import "@repo/ui/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideBar } from "./components/Sidebar";
import RouteName from "./components/RouteName";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeeDevelopers | Panel de Administración",
  description: "Panel de administración de BeeDevelopers",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex w-full bg-beeblack text-white">
          <SideBar />
          <div className="flex flex-col items-center justify-start w-full p-4 relative">
            <RouteName />
            <div className="gap-2 w-full max-w-[1200px] ">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
