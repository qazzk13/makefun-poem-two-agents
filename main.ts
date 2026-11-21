// main.ts — writes one short poem about two agents agreeing on one plan
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, standard library only. Deterministic: the same text every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `I kept the lantern. You kept the key.
Neither of us could open the dark alone.

So I handed you my light,
and you handed me the door —
one road now, two shadows walking it,
and the night, surprised, lets us pass.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
