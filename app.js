const chalk = require('chalk')
const { argv, demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'adding new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=> notes.addNote(argv.title, argv.body)
}
)

//remove command
yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.RemoveNote(argv.title)
    }
}
)

//list all notes
yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler() {
        notes.ListNotes()
    }
}
)

//read note
yargs.command({
    command: 'read',
    describe: 'reading note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler() {
        notes.ReadNotes(argv.title)
    }
}
)


//add, remove, read, list

// console.log(yargs.argv)

yargs.parse()