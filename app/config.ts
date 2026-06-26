import { create } from "zustand";
import { authOptions, clientStateOptions, frameworkOptions, localizationOptions, serverStateOptions, testingOptions } from "./components/stack/options";

interface Meta {
  projectName: string,
  description: string,
}

const initialMeta: Meta = {
  projectName: "",
  description: "",
}

interface StackConfig {
  framework: string,
  clientState: string,
  serverState: string,
  localization: string,
  auth: string,
  testing: string,
  gotchas: string[],
}

const initialStack: StackConfig = {
  framework: frameworkOptions[0].value,
  clientState: clientStateOptions[0].value,
  serverState: serverStateOptions[0].value,
  localization: localizationOptions[0].value,
  auth: authOptions[0].value,
  testing: testingOptions[0].value,
  gotchas: [],
}

interface Color {
  role: string;
  hex: string;
}

export interface Palette {
  name: string;
  colors: Color[];
}

interface DesignConfig {
  philosophies: string[],
  mood: string,
  palettes: Palette[],
}

const initialDesign: DesignConfig = {
  philosophies: ["Professional", "Minimal", "User-Centric"],
  mood: "Suitable for large scale cargo management",
  palettes: [
    {
      name: "",
      colors: [
        { role: "Primary", hex: "#000099" },
        { role: "Title Blue", hex: "#0d3d6e" },
        { role: "Primary Text", hex: "#030202" },
      ],
    },
  ],
}

interface GeneratorStore {
  meta: Meta,
  stack: StackConfig,
  design: DesignConfig,

  updateMeta: (name: Partial<Meta>) => void,
  updateStack: (stackData: Partial<StackConfig>) => void,
  updateDesign: (stackData: Partial<DesignConfig>) => void,
}

export const useGeneratorStore = create<GeneratorStore>((set) => ({
  meta: initialMeta,
  stack: initialStack,
  design: initialDesign,

  updateMeta: (data) =>
    set((state) => ({
      meta: {
        ...state.meta,
        ...data,
      },
    })),
  
  updateStack: (data) =>
    set((state) => ({
      stack: {
        ...state.stack,
        ...data,
      },
    })),

  updateDesign: (data) =>
    set((state) => ({
      design: {
        ...state.design,
        ...data,
      },
    })),
}))