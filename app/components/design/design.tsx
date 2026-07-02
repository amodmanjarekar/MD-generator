"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import Colors from "./colors";
import { philosophies } from "./options";
import { useGeneratorStore } from "@/app/config";
import Philosophies from "./philosophies";
import Mood from "./mood";
import Fonts from "./fonts";
import ComponentStyles from "./ComponentStyles";

export default function Design() {

  return (
    <div className="flex flex-col items-center gap-6">
      <Mood />
      <Philosophies />
      <Colors />
      <Fonts/>
      <ComponentStyles/>
    </div>
  );
}
