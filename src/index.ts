#! /usr/bin/env node

import { Command } from "commander";
import checkMyRepo from "./commands/checkmyrepo";

const program = new Command();

program.command("checkmyrepo").action(checkMyRepo);

program.parse();
