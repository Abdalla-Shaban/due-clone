"use client";
import { BsGrid } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { PiUserGearLight, PiGraduationCapLight } from "react-icons/pi";
import { CiMoneyCheck1, CiBookmark, CiFlag1 } from "react-icons/ci";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/due-icon.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";
export const sidebarLinks = [
  {
    title: "dashboard",
    href: "/",
    icon: <BsGrid size={18} />,
  },
  {
    title: "projects",
    href: "/projects",
    icon: <FiLayers size={18} />,
  },
  {
    title: "user management",
    href: "/users",
    icon: <PiUserGearLight size={18} />,
  },
  {
    title: "report templates",
    href: "/templates",
    icon: <CiMoneyCheck1 size={18} />,
  },
  {
    title: "questions bank",
    href: "/qbank",
    icon: <CiBookmark size={18} />,
  },
  {
    title: "key issues",
    href: "/key-issues",
    icon: <CiFlag1 size={18} />,
  },
  {
    title: "tutorial",
    href: "/tutorial",
    icon: <PiGraduationCapLight size={18} />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  return (
    <aside
      className={`group relative bg-[#f8fafc] shadow-md py-6 px-4 duration-300 ${
        hidden ? "w-[75px]" : "w-[255px]"
      }`}
    >
      <button
        type="button"
        onClick={() => setHidden(!hidden)}
        className="absolute w-[25px] h-[25px] right-[-12.5px] z-20 bg-[#fff] shadow-md rounded-full flex items-center justify-center cursor-pointer duration-300 opacity-0 group-hover:opacity-100 hover:bg-[#5378f4] hover:text-[#fff]"
      >
        {hidden ? (
          <RiArrowRightSLine size={18} />
        ) : (
          <RiArrowLeftSLine size={18} />
        )}
      </button>
      <div className="mb-5 px-3">
        <Link className="flex items-center gap-1" href="/">
          <Image src={logo} alt="due logo" width={20} height={20} />
          <h1
            className={`text-4xl self-end font-bold text-[#5378f4] ${
              hidden && "hidden"
            }`}
          >
            Due
          </h1>
        </Link>
      </div>
      <ul className="flex flex-col gap-2">
        {sidebarLinks.map((link) => {
          return (
            <li key={link.title}>
              <Link
                className={`flex items-center gap-3 text-sm capitalize p-3 ${
                  pathname == link.href && "shadow-md bg-[#fff] rounded-md"
                }`}
                href={link.href}
              >
                {link.icon}
                <span className={`${hidden && "hidden"}`}>{link.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
