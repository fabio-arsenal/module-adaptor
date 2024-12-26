import { execa } from 'execa';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';

const rootDir = process.cwd();


const packageJsonData = JSON.parse(
    await fs.readFile(path.join(rootDir, 'package.json'))
);

// const packageDirs = (
//     await Promise.all(packageJsonData.workspaces.map((item) => glob(item)))
// ).flat();

// await execa(`npm profile get --registry=https://registry.npmjs.org/ `, { shell: true, stdio: 'inherit' });

await Promise.all(['.'].map((item) => {
    const publishCmd = `npm publish --tag ${argv.tag} --registry=https://registry.npmjs.org/ --access public`;
    return execa(publishCmd, { shell: true, stdio: 'inherit', cwd: path.join(rootDir, item) });
}))

//
//
// const argv = yargs(hideBin(process.argv)).argv
//
// let argv = yargs(hideBin(process.argv))
//   .usage(
//     '$0 [-t|--tag]'
//   )
//   .command({
//     command: '*',
//     builder: yargs => {
//       return yargs
//         .option('t', {
//           alias: 'tag',
//           describe: 'the npm dist-tag',
//           default: 'latest',
//           type: 'string',
//         });
//     },
//     handler: async argv => {
//
// 			const packageJsonData = JSON.parse(
// 				await fs.readFile(path.join(rootDir, 'package.json'))
// 			);
//
// 			const packageDirs = (
// 				await Promise.all(packageJsonData.workspaces.map((item) => glob(item)))
// 			).flat();
//
//       // await execa(`npm profile get --registry=https://registry.npmjs.org/ `, { shell: true, stdio: 'inherit' });
//
// 			await Promise.all(packageDirs.map((item) => {
// 				const publishCmd = `npm publish --tag ${argv.tag} --registry=https://registry.npmjs.org/ --access public`;
// 				return execa(publishCmd, { shell: true, stdio: 'inherit', cwd: path.join(rootDir, item) });
// 			}))
//
//     },
//   })
//   .help().argv;
