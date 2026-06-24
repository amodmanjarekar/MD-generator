import { authOptions, frameworkOptions, localizationOptions, serverStateOptions, testingOptions } from "../components/stack/options";
import { useGeneratorStore } from "../config";
import { DropdownOption } from "../ui/dropdown";

function findOption(
  value: string,
  options: DropdownOption[],
) {
  return options.find((o) => o.value === value);
}

function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], {
    type: "text/markdown;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

export default function generateMDs() {
  const base = useGeneratorStore.getState();
  const meta = base.meta;
  const stack = base.stack;

  const md = `
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

  downloadFile("CLAUDE.md", md);
}