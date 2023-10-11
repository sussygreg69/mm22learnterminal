import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

console.log(boxen(chalk.bgBlue('hello world'),  {title:'hello title', titleAlignment: 'left', borderStyle:'double'}));
console.log(boxen('hello world', {padding: 1, margin: 1, borderStyle:'round'}));
console.log(boxen(chalk.bgRedBright.magenta('hello world'),  {title:'hello title', titleAlignment: 'center', padding: 13, margin: 9, borderStyle:'arrow', borderColor:'magenta'}));
console.log(boxen('hello world', {padding: 1, margin: 1, borderStyle:'round'}));
console.log(boxen(chalk.bgBlueBright.yellow('hello world'),  {title:'hello title', titleAlignment: 'right', padding: 3, margin: 6, borderStyle:'singleDouble', borderColor:'yellow'}));
