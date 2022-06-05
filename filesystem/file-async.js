const fs = require ('fs')

function createAsyncFile () {

    fs.writeFile('async-text-1.txt','txt', (err) => {

        if (err) 
            throw err;

        console.log ('async-text-1.txt has been saved!');
    })   

    fs.writeFile('async-text-2.txt','txt', (err) => {

        if (err) 
            throw err;

        console.log ('async-text-2.txt has been saved!');
    })   

    fs.writeFile('async-text-3.txt','txt', (err) => {

        if (err) 
            throw err;

        console.log ('async-text-3.txt has been saved!');
    })   

    fs.writeFile('async-text-4.txt','txt', (err) => {

        if (err) 
            throw err;

        console.log ('async-text-4.txt has been saved!');
    })   

    fs.writeFile('async-text-5.txt','txt', (err) => {

        if (err) 
            throw err;

        console.log ('async-text-5.txt has been saved!');
    })   
}
createAsyncFile ()

