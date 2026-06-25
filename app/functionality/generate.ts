import JSZip from "jszip";
import { generateClaude } from "./claude-template";
import { generateDesign } from "./design-template";

async function downloadFile(files: Record<string, string>) {
  const zip = new JSZip();

  Object.entries(files).forEach(([filename, content]) => {
    zip.file(filename, content);
  })

  const blob = await zip.generateAsync({
    type: "blob"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Generated-MDs.zip";

  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

export default function generateMDs() {
  const files = {
    "CLAUDE.md": generateClaude(),
    "DESIGN.md": generateDesign(),
  }

  downloadFile(files);
}