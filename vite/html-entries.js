import { fileURLToPath, URL } from "url";
import { globSync } from "glob";

const htmlEntriesArray = globSync(
  fileURLToPath(new URL("../src/index.html", import.meta.url))
).map((entry) => {
  return [entry.replace(/^.+src\/|.html$/g, ""), entry];
});

export const htmlEntries = Object.fromEntries(htmlEntriesArray);
console.log(htmlEntries); // デバッグ用にエントリーポイントを出力
