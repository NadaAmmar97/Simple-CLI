const { program } = require('commander');
program.version('0.0.1');

program
.command('add')
    .description('add new note to your database')
    .arguments('<title> <date>', 'required')
.command('list')
    .description('show all notes in database')

program.parse(process.argv);

console.log(program)