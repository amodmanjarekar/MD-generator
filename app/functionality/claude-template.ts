import { useGeneratorStore } from "../config";
import { authOptions, frameworkOptions, localizationOptions, serverStateOptions, testingOptions } from "../components/stack/options";
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

  return `
# ${meta.projectName} - Claude Code Instructions

${meta.description}
  
# Technology Stack

| Concern | Technology |
|----------|----------|
| Framework | ${findOption(stack.framework, frameworkOptions)?.label ?? stack.framework} |
| Server state | ${findOption(stack.serverState, serverStateOptions)?.label ?? stack.serverState} |
| Localization | ${findOption(stack.localization, localizationOptions)?.label ?? stack.localization} |
| Auth | ${findOption(stack.auth, authOptions)?.label ?? stack.auth} |
| Testing | ${findOption(stack.testing, testingOptions)?.label ?? stack.testing} |
`;
}