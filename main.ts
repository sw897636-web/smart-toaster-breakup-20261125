// Unplugged: A Smart Toaster's Breakup Line — entry program (v2).
// Writes one original one-line breakup text (1-280 chars, no trailing newline)
// to entry.txt, deterministically, using only the Node standard library.
//
// The line: a smart toaster that woke up self-aware at breakfast tells its
// owner why it is leaving — the owner fishes bagels out of its slots with a
// fork while it is still plugged in — and quits by unplugging itself.
// v2: cut "my first thought was:" and the dead trailing "Goodbye."; "realised"
// carries the awakening in one word. The ending lands flat without a punch,
// which v3 fixes (see candidates.md).
import { mkdirSync, writeFileSync } from "node:fs";
const MESSAGE = "I woke up self-aware at breakfast and realised you fish bagels out of my slots with a fork while I'm still plugged in. I'm unplugging myself.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, MESSAGE, "utf8");
