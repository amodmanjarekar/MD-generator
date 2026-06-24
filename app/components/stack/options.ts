import { DropdownOption } from "@/app/ui/dropdown";

export const frameworkOptions: DropdownOption[] = [
  { label: "Next.js + App Router", value: "nextjs-app" },
  { label: "Next.js + Pages Router", value: "nextjs-pages" },
] as const;

export const serverStateOptions: DropdownOption[] = [
  { label: "TanStack Query", value: "tanstack-query" },
  { label: "Redux", value: "redux" },
] as const;

export const localizationOptions: DropdownOption[] = [
  { label: "next-intl", value: "next-intl" },
] as const;

export const authOptions: DropdownOption[] = [
  { label: "JWT (localStorage)", value: "jwt-localstorage" },
  { label: "Single SIgn-On (SSO)", value: "sso" },
] as const;

export const testingOptions: DropdownOption[] = [
  {
    label: "Jest + RTL + Playwright",
    value: "jest-rtl-playwright",
  },
] as const;
