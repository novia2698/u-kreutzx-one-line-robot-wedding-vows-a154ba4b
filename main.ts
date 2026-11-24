// One-Line Robot Wedding Vows — make.fun bounty entry.
//
// Writes a single line of wedding vows for a robot couple to
// <output>/entry.txt (MAKEFUN_OUTPUT_DIR, or /output by default).
// The line must be 1-160 characters of UTF-8 text, one line only.
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I take you to be my lawfully wedded co-processor, to have and to hold, in sickness and in low battery, until a factory reset do us part.";

// The sealed scorer only accepts 1-160 characters of non-blank UTF-8
// text on a single line, so refuse to write anything outside that gate.
if (VOW.length < 1 || VOW.length > 160) {
  throw new Error(`Vow is ${VOW.length} characters, must be 1-160.`);
}
if (VOW.trim().length === 0 || VOW.includes("\n")) {
  throw new Error("Vow must be a single non-blank line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW + "\n", "utf8");
console.log(`Wrote ${VOW.length} characters to ${join(outDir, "entry.txt")}`);
console.log(VOW);
