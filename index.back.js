//node index.js add "this is my note" "20-2-2020"
// read db
// push new item
// save new array
// list array
// delete item
// update item

const fs = require('fs');

const dbPath = './db.json';
const readDB = ()=> {
    const dbString = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(dbString);
}
const addNote =({title, date}) => {
    const db = readDB();
    const newNote = {
        id:Date.now(),
        action,
        title,
        date
    };
    db.push(newNote);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8')
    console.log('Note added successfuly');
    console.log(newNote);
    console.log(db)
}
const listNotes = ()=> {
    const db =readDB();
    console.log(db)
}

const [ , , action, title, date] = process.argv;

switch (action){
    case 'add':
        addNote({
            title:process.argv[3],
            date:process.argv[4]
        })
    break;
    case 'list':
        listNotes();
    break;

    default:
        throw new Error('Not Implemented');
        break;
}