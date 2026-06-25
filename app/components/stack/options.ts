import { DropdownOption } from "@/app/ui/dropdown";

export const frameworkOptions: DropdownOption[] = [
  { label: "Next.js + App Router", value: "nextjs-app" },
  { label: "Next.js + Pages Router", value: "nextjs-pages" },
] as const;

export const clientStateOptions: DropdownOption[] = [
  { label: "Zustand", value: "zustand"},
  { label: "Redux", value: "redux" },
] as const;

export const serverStateOptions: DropdownOption[] = [
  { label: "TanStack Query", value: "tanstack-query" },
  { label: "RTK Query", value: "rtk-query" },
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

export const gotchas: Record<string, string[]> = {
  "nextjs-app": [
    "Routes live under `src/app`, not `src/pages`.",
    "Avoid unnecessary `'use client'` directives.",
    "Browser APIs are unavailable in Server Components.",
    "Nested `layout.tsx` files may contain providers, guards, and shared UI.",
  ],

  "nextjs-pages": [
    "Routes are generated from files in `src/pages`.",
    "`_app.tsx` and `_document.tsx` may affect global behavior.",
    "Check for `getServerSideProps` and `getStaticProps` before changing data-loading logic.",
  ],

  zustand: [
    "Reuse existing stores before creating new ones.",
    "Avoid storing derived state that can be computed.",
    "Persisted stores may contain stale data after state shape changes.",
  ],

  redux: [
    "Keep state changes inside existing slices when possible.",
    "Use selectors instead of duplicating state access logic.",
    "Check middleware before assuming action flow is straightforward.",
  ],

  "tanstack-query": [
    "Mutations often require query invalidation.",
    "Reuse existing query keys and query hooks.",
    "Avoid duplicating server-state in component state.",
  ],

  "rtk-query": [
    "Cache updates depend on correctly configured tags.",
    "Extend existing API slices before creating new ones.",
    "Avoid mixing RTK Query and manual fetching for the same resource.",
  ],

  "next-intl": [
    "Avoid hardcoded user-facing strings.",
    "Add new translation keys to message files.",
    "Locale-aware routing may use custom navigation wrappers.",
  ],

  "jwt-localstorage": [
    "Authentication state is only available client-side.",
    "`localStorage` cannot be accessed during server rendering.",
    "Never log tokens or authentication data.",
  ],

  sso: [
    "Authentication behavior may depend on the external identity provider.",
    "Authorization logic is often separate from authentication logic.",
    "Never log tokens, claims, or identity data.",
  ],

  "jest-rtl-playwright": [
    "RTL tests should verify behavior, not implementation details.",
    "Playwright tests may rely on seeded data or authentication setup.",
    "User-flow changes often require Playwright updates.",
  ],
};