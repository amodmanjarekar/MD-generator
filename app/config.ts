import { create } from "zustand";
import { authOptions, frameworkOptions, localizationOptions, serverStateOptions, testingOptions } from "./components/stack/options";

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
  serverState: string,
  localization: string,
  auth: string,
  testing: string,
}

const initialStack: StackConfig = {
  framework: frameworkOptions[0].value,
  serverState: serverStateOptions[0].value,
  localization: localizationOptions[0].value,
  auth: authOptions[0].value,
  testing: testingOptions[0].value,
}

interface GeneratorStore {
  meta: Meta,
  stack: StackConfig,

  updateMeta: (name: Partial<Meta>) => void,
  updateStack: (stackData: Partial<StackConfig>) => void,
}

export const useGeneratorStore = create<GeneratorStore>((set) => ({
  meta: initialMeta,
  stack: initialStack,

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
}))