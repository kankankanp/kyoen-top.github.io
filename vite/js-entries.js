import { fileURLToPath, URL } from "url";
import { globSync } from "glob";

const jsEntriesArray = globSync(
  fileURLToPath(new URL("../src/js/*.js", import.meta.url))
).map((entry) => {
  return [entry.replace(/^.+src\/|.js$/g, ""), entry];
});

export const jsEntries = Object.fromEntries(jsEntriesArray);
