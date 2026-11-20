// Copies POST.json (the X post URL for this entry) to the output directory.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postFile = join(here, "POST.json");
if (!existsSync(postFile)) {
  throw new Error(`POST.json not found at ${postFile}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(postFile, join(outDir, "POST.json"));
console.log(`Copied POST.json to ${join(outDir, "POST.json")}`);
