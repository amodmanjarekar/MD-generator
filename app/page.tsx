"use client";
import { useState } from "react";
import Stack from "./components/stack/stack";
import Design from "./components/design/design";
import generateMDs from "./functionality/generate";
import { Layers, Leaf, PencilSparkles } from "lucide-react";

export default function Home() {
  const [ tab, setTab ] = useState<"stack" | "design">("stack");

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="p-3 bg-[#260231] flex justify-center fixed top-0 left-0 z-50 w-full">
        <ul className="flex">
          <li
            className="  group relative flex gap-2 hover:cursor-pointer  decoration-2 hover:underline hover:underline-offset-8 text-white w-35 border-r-3"
            onClick={() => setTab("stack")}
          >
            <Layers className=" relative z-10" />
            Stack
          </li>
          <li
            className=" flex gap-2 hover:cursor-pointer decoration-2 hover:underline hover:underline-offset-8 text-white  w-35 justify-end"
            onClick={() => setTab("design")}
          >
            <PencilSparkles />
            Design
          </li>
        </ul>
      </nav>

      <main className="pt-22 p-5">
        <div className={tab === "stack" ? "" : "hidden"}>
          <Stack />
        </div>
        <div className={tab === "design" ? "" : "hidden"}>
          <Design />
        </div>
      </main>
      <footer className="sticky bottom-0 mt-auto bg-[#260231] ">
        <div className="  px-20 py-1  flex justify-end">
          <button
            className=" text-white flex gap-2 p-2 cursor-pointer hover:border-b-2  hover:border-b-white pb-0.5"
            onClick={generateMDs}
          >

           <Leaf/>
            Generate MDs
          </button>
        </div>
      </footer>
    </div>
  );
}
