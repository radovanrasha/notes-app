const { default: chalk } = require('chalk')
const fs = require('fs')
const { exit } = require('process')


const addNote = (title, body)=> {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNote = notes.find((note)=> note.title === title)

    debugger
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('new note added')
    }else{
        console.log('title taken')
    }
    
    
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }

}

const RemoveNote = (title) =>{
    const notes = loadNotes()
    

    const unmatchingNotes = notes.filter((note)=> title !== note.title) 

    saveNotes(unmatchingNotes)

    if (notes.length > unmatchingNotes.length){
        console.log(chalk.bgGreen('beleska obrisana'))

    }else{
        console.log(chalk.bgRed('beleska nije pronadjena'))
    }
    
   
}

const ListNotes = () => {
    console.log(chalk.bgBlue('------this is your notes-----'))
    const sveBeleske = loadNotes()


    sveBeleske.forEach((note) => {
        console.log(chalk.bgYellow(note.title))
    });

}

const ReadNotes = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    
    if (note) {
        console.log(chalk.bgCyan(note.title))
        console.log(note.body)
        
    }else{
        console.log('Beleska ne postoji.')
    }
    };

    


module.exports = {
    addNote: addNote,
    RemoveNote: RemoveNote,
    ListNotes: ListNotes,
    ReadNotes: ReadNotes
}