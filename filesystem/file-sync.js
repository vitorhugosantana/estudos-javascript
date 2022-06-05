//import * as fs from 'fs';
const fs = require ('fs')

function createSyncFile () {

    fs.writeFileSync ('sync-text-1.txt','conteudo1')
    fs.writeFileSync ('sync-text-2.txt','conteudo2')
    fs.writeFileSync ('sync-text-3.txt','conteudo3')
    fs.writeFileSync ('sync-text-4.txt','conteudo4')
    fs.writeFileSync ('sync-text-5.txt','conteudo5')
}

createSyncFile()