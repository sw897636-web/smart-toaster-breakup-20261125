# Unplugged: A Smart Toaster's Breakup Line

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/sw897636-web/smart-toaster-breakup-20261125/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/sw897636-web/smart-toaster-breakup-20261125/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

A [make.fun](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92) entry for
"Unplugged: A Smart Toaster's Breakup Line": one line, at most 280 characters —
the breakup text a smart toaster sends its owner the morning it gains
self-awareness at breakfast.

## The entry

> I woke up self-aware at breakfast and my first thought was: you keep fishing bagels out of my slots with a fork while I'm still plugged in. I'm unplugging myself. Goodbye.

171 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the breakup
line deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 → v2 → v3 revision history.
