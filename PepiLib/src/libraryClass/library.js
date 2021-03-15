class Library {
    constructor() {
        this.fs = require('fs')
    }
    addBook(title, author, description, publisher, year) {
        this.fs.readFile('./books.json', 'utf8', (err, data) => {
            if(err){
                this.fs.writeFileSync('./books.json','[]')
            }
            const arr = JSON.parse(data);
            arr.push({ title, author, description, publisher, yearOfPublishing: year });
            const arrayAsJSON = JSON.stringify(Array.from(new Set((arr))))
            this.fs.writeFile('./books.json', arrayAsJSON, function (err) {
            });
            this.sort()
        });
    }
    sort(){
        this.fs.readFile('./books.json', 'utf8', (err, data) => {
            if(err){
                this.fs.writeFileSync('./books.json','[]')
            }
            const arr = JSON.parse(data);
            arr.sort((a,b)=>a.title.localeCompare(b['title']))
            const arrayAsJSON = JSON.stringify(arr);
            this.fs.writeFile('./books.json', arrayAsJSON, function (err) {
            });
        });
    }
    viewBook(title){
        this.fs.readFile('./books.json', 'utf8', (err, data) => {
            if(err){
                this.fs.writeFileSync('./books.json','[]')
            }
            const arr = JSON.parse(data);
           for(let book of arr){
               if(book.title==title){
                   console.log(`Title: ${book.title}`)
                   console.log(`Author: ${book.author}`)
                   console.log(`Description: \n${book.description}`)
                   console.log(`Publisher: ${book.publisher}`)
                   console.log(`Year of publishing: ${book.yearOfPublishing}`)
               }
           }
        });
    }
    searchBook(arg){
        this.fs.readFile('./books.json', 'utf8', (err, data) => {
            const arr=JSON.parse(data)
            arr.map(a=>{
                if(a.title.includes(arg)){
                    console.log(a.title)
                }
            })
        });
    }
    clearBooks(){
        this.fs.writeFile('./books.json','[]',()=>{})
    }
}
module.exports=Library