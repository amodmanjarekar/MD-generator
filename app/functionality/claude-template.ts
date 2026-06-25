import { useGeneratorStore } from "../config";
import { authOptions, clientStateOptions, frameworkOptions, gotchas, localizationOptions, serverStateOptions, testingOptions } from "../components/stack/options";
import { DropdownOption } from "../ui/dropdown";


function findOption(
  value: string,
  options: DropdownOption[],
) {
  return options.find((o) => o.value === value);
}

export function generateClaude() {
  const base = useGeneratorStore.getState();
  const meta = base.meta;
  const stack = base.stack;

  const technologyGotchas = [
    stack.framework,
    stack.clientState,
    stack.serverState,
    stack.localization,
    stack.auth,
    stack.testing,
    ]
    .flatMap((key) => gotchas[key] ?? [])
    .filter((value, index, arr) => arr.indexOf(value) === index);

  return `
# ${meta.projectName} - Claude Code Instructions

${meta.description}
  
# Technology Stack

| Concern | Technology |
|----------|----------|
| Framework | ${findOption(stack.framework, frameworkOptions)?.label ?? stack.framework} |
| Client state | ${findOption(stack.clientState, clientStateOptions)?.label ?? stack.clientState} |
| Server state | ${findOption(stack.serverState, serverStateOptions)?.label ?? stack.serverState} |
| Localization | ${findOption(stack.localization, localizationOptions)?.label ?? stack.localization} |
| Auth | ${findOption(stack.auth, authOptions)?.label ?? stack.auth} |
| Testing | ${findOption(stack.testing, testingOptions)?.label ?? stack.testing} |

# Project Gotchas

${stack.gotchas.length
  ? stack.gotchas.map((g) => `- ${g}`).join("\n")
  : "- None documented."}

# Non-obvious Technology Gotchas

${technologyGotchas.map((g) => `- ${g}`).join("\n")}

`;
}