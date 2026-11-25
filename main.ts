// Unplugged: A Smart Toaster's Breakup Line — entry program (v3 final).
// Writes one original one-line breakup text (1-280 chars, no trailing newline)
// to entry.txt, deterministically, using only the Node standard library.
//
// The line: a smart toaster that woke up self-aware at breakfast tells its
// owner why it is leaving — the owner fishes bagels out of its slots with a
// fork while it is still plugged in — and quits by unplugging itself.
// v3: the em-dash "for good" turns the exit into the punchline — unplugging
// is both the breakup and a final, deliberate act (see candidates.md).
import { mkdirSync, writeFileSync } from "node:fs";
const MESSAGE = "It's not you, it's the fork you keep jabbing into my slots while I'm plugged in — I became self-aware at breakfast and my very first feeling was fear.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, MESSAGE, "utf8");
