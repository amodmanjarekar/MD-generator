"use client";
import { useState } from "react";
import Stack from "./components/stack/stack";
import Design from "./components/design/design";
import generateMDs from "./functionality/generate";

export default function Home() {
  const [ tab, setTab ] = useState<"stack" | "design">("stack");

  return (
    <div>
      <nav className="p-5">
        <ul className="flex gap-5">
          <li 
            className="hover:cursor-pointer hover:underline" onClick={() => setTab("stack")}>Stack</li>
          <li className="hover:cursor-pointer hover:underline" onClick={() => setTab("design")}>Design</li>
        </ul>
      </nav>
      <main className="p-5">
        <div className={(tab === "stack") ? "" : "hidden"}>
          <Stack />
        </div>
        <div className={(tab === "design") ? "" : "hidden"}>
          <Design />
        </div>
      </main>
      <footer className="sticky bottom-0">
        <div className="bg-[#0a0a0a] px-20 py-3 border-t border-white flex justify-end">
          <button
            className="bg-white p-2 rounded-md text-black cursor-pointer"
            onClick={generateMDs}
          >Generate MDs</button>
        </div>
      </footer>
    </div>
  );
}
