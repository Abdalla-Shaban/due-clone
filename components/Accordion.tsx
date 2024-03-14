"use client";

import { getProjects } from "@/utils";
import Link from "next/link";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { MdOutlineAssignment, MdReadMore } from "react-icons/md";

import useSWR from "swr";
import RippleEffect from "./RippleEffect";

const Accordion = ({ pathname }: { pathname: string }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const { data, isLoading } = useSWR(process.env.NEXT_PUBLIC_API, getProjects);
  isLoading ? "Loading..." : data;
  const handleClick = () => {
    setAccordionOpen(!accordionOpen);
  };
  return (
    <div>
      <RippleEffect
        onClick={handleClick}
        style={`w-full flex items-center justify-between py-3 px-4 ${
          pathname.includes("projects") &&
          "bg-blue-50 text-blue-700 border-r-[3px] border-r-primary font-semibold"
        }`}
      >
        <span className="flex items-center gap-2">
          <MdOutlineAssignment size={23} /> Projects
        </span>
        <span>{accordionOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </RippleEffect>
      <div
        className={`overflow-hidden grid transition-all duration-300 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {data?.map((project: ProjectPropsTypes) => (
            <RippleEffect style="w-full" key={project.id}>
              <Link
                className={`flex items-center gap-3 text-sm capitalize py-3 pl-6 ${
                  pathname.includes(project.id)
                    ? "bg-blue-50 text-blue-700 border-r-[3px] border-r-primary"
                    : "hover:bg-slate-200"
                }`}
                href={`/projects/${project.id}`}
              >
                <span className="flex items-center justify-center p-3 w-[20px] h-[20px] rounded-full bg-slate-400 text-white text-lg normal-case">
                  {project.title.slice(0, 1)}
                </span>
                <span
                  className={`${
                    pathname.includes(project.id) && "font-semibold"
                  }`}
                >
                  {project.title}
                </span>
              </Link>
            </RippleEffect>
          ))}
          <RippleEffect>
            <Link
              className={`flex items-center gap-3 text-sm capitalize py-3 pl-6`}
              href={`/projects`}
            >
              <MdReadMore size={23} />
              See all projects
            </Link>
          </RippleEffect>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
