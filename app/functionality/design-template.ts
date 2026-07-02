import { useGeneratorStore } from "../config"

export function generateDesign() {
  const base = useGeneratorStore.getState();
  const name = base.meta.projectName;
  const design = base.design;

  return `
# Design System - ${name}

---

# 1. Visual Theme & Atmosphere

## Design Philosophy

${design.philosophies
  .map((p) => `- ${p}\n`)
  .join("")
}

## Mood

${design.mood}

---

## Palettes

${design.palettes
  .map(
    (palette) => `
### ${palette.name || "Unnamed Palette"}

| Role | Hex |
|------|-----|
${palette.colors
  .map((color) => `| ${color.role} | ${color.hex} |`)
  .join("\n")}
`
  )
  .join("\n")}

# 3. Typography Rules

## Font Families

${design.fonts
  .map(
    (font) => `
### ${font.type || "Unnamed Font"}

${font.family}

Used for:

${font.usedFor
  .filter((usage) => usage.trim() !== "")
  .map((usage) => `- ${usage}`)
  .join("\n")}
`
  )
  .join("\n")}

## Typography Hierarchy

| Element | Size |
|----------|------|
${design.typography
  .map(
    (item) => `| ${item.element || "-"} | ${item.size || "-"} |`
  )
  .join("\n")}

---
# 4. Component Stylings

## Buttons

${design.buttonStyles
  .map(
    (button) => `
### ${button.type || "Unnamed Button"}

Color: ${button.color || "-"}

States:

${button.states
  .filter((state) => state.trim() !== "")
  .map((state) => `- ${state}`)
  .join("\n")}
`
  )
  .join("\n")}

## Inputs

${design.inputStyles
  .map(
    (input) => `
States:

${input.states
  .filter((state) => state.trim() !== "")
  .map((state) => `- ${state}`)
  .join("\n")}
`
  )
  .join("\n")}

## Cards

${design.cardStyles
  .map(
    (card) => `
${card.features
  .filter((feature) => feature.trim() !== "")
  .map((feature) => `- ${feature}`)
  .join("\n")}
`
  )
  .join("\n")}

## Navigation

${design.navigationStyles
  .map(
    (navigation) => `
${navigation.features
  .filter((feature) => feature.trim() !== "")
  .map((feature) => `- ${feature}`)
  .join("\n")}
`
  )
  .join("\n")}

## Feedback Components

${design.feedbackStyles
  .map(
    (feedback) => `
${feedback.types
  .filter((type) => type.trim() !== "")
  .map((type) => `- ${type}`)
  .join("\n")}
`
  )
  .join("\n")}

---
  `;
}