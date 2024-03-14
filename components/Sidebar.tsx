"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineManageAccounts,
  MdOutlineInsertDriveFile,
  MdOutlineFlag,
  MdOutlineBookmarkBorder,
  MdOutlineLocalLibrary,
} from "react-icons/md";
import logo from "../public/due-icon.svg";
import Accordion from "./Accordion";
import RippleEffect from "./RippleEffect";

export const organizationLinks = [
  {
    title: "user management",
    href: "/users",
    icon: <MdOutlineManageAccounts size={23} />,
  },
  {
    title: "report templates",
    href: "/templates",
    icon: <MdOutlineInsertDriveFile size={23} />,
  },
  {
    title: "key issues",
    href: "/key-issues",
    icon: <MdOutlineFlag size={23} />,
  },
  {
    title: "questions bank",
    href: "/qbank",
    icon: <MdOutlineBookmarkBorder size={23} />,
  },
];

const Sidebar = ({ open }: SidebarControlTypes) => {
  const pathname = usePathname();
  return (
    <aside
      className={`overflow-hidden relative bg-white duration-300 ${
        open ? "w-0 opacity-0" : "w-[255px]"
      }`}
    >
      <div className="h-[70px] pl-6 flex items-center border-b-slate-200 border-r-slate-200 border-[1px]">
        <Link className="flex items-center gap-1" href="/">
          <Image src={logo} alt="due logo" width={20} height={20} priority />
          <h1 className={`text-4xl self-end font-bold text-primary`}>Due</h1>
        </Link>
      </div>
      <div className="flex flex-col">
        <span className="block px-3 py-4 text-gray-500">Workspace</span>
        <RippleEffect>
          <Link
            className={`flex items-center gap-2 capitalize py-3 px-4 ${
              pathname == "/"
                ? "bg-blue-100 text-blue-700 border-r-[3px] border-r-primary"
                : "hover:bg-slate-200"
            }`}
            href="/"
          >
            <AiOutlineHome size={23} />
            <span className={`${pathname == "/" && "font-semibold"}`}>
              Dashboard
            </span>
          </Link>
        </RippleEffect>
        <Accordion pathname={pathname} />
        <hr className="my-2" />
        <span className="block px-3 py-4 text-gray-500">Organization</span>
        {organizationLinks.map((link) => (
          <RippleEffect key={link.href}>
            <Link
              className={`flex items-center gap-2 capitalize py-3 px-4 ${
                pathname.includes(link.href)
                  ? "bg-blue-50 text-blue-700 border-r-[3px] border-r-primary"
                  : "hover:bg-slate-200"
              }`}
              href={link.href}
            >
              {link.icon}
              <span
                className={`${pathname.includes(link.href) && "font-semibold"}`}
              >
                {link.title}
              </span>
            </Link>
          </RippleEffect>
        ))}
        <hr className="my-2" />
        <span className="block px-3 py-4 text-gray-500">Help</span>
        <RippleEffect>
          <Link
            className={`flex items-center gap-2 capitalize py-3 px-4 ${
              pathname.includes("tutorial")
                ? "bg-blue-50 text-blue-700 border-r-[3px] border-r-primary"
                : "hover:bg-slate-200"
            }`}
            href="/tutorial"
          >
            <MdOutlineLocalLibrary size={23} />
            <span
              className={`${pathname.includes("tutorial") && "font-semibold"}`}
            >
              Tutorial
            </span>
          </Link>
        </RippleEffect>
        <hr className="my-3" />
      </div>
    </aside>
  );
};

export default Sidebar;
