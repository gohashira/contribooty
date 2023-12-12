import fs from "fs-extra";
import getDirPath from "../helpers/getDirPath";

export default function checkMyRepo() {
  const gitDirPath = getDirPath();
  if (!gitDirPath) return;

  // ...
}
