import fs from "fs-extra";

export default function getDirPath() {
  const cwd = process.cwd();
  let gitDirPath = "";
  for (let i = 0; i <= 5; i++) {
    if (fs.existsSync(".git")) {
      gitDirPath = process.cwd() + "/.git";

      break;
    }

    process.chdir("..");
  }
  process.chdir(cwd);

  return gitDirPath;
}
