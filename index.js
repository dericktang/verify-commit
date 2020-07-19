const validateMessage = require("validate-commit-msg");
const chalk = require("chalk");

const msgPath = process.env.GIT_PARAMS;
const msg = require("fs").readFileSync(msgPath, "utf-8").trim();

const valid = validateMessage(msg);
if (!valid) {
  console.log();
  console.error(
    `  ${chalk.bgRed.white(" ERROR ")} ${chalk.red(`invalid commit message format.`)}\n\n` +
      chalk.red(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}\n\n` +
      chalk.red(`  See .github/commit-convention.md for more details.\n`) +
      chalk.red(`  Use .you can use ` + `${chalk.blue(`git cz`)}` + `.\n`)
  );
  process.exit(1);
}
