const {nanoid}  = require('nanoid')
const bookshelf =require('./bookshelf')


const createBooksHandler = (request, h)=>{

    const id =nanoid(16)
    const finished = isFinished(readPage, pageCount)
    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt

    const {
        name, 
        year, 
        author, 
        summary, 
        publisher, 
        pageCount, 
        readPage,
        reading
    } = request.payload
    
    const isFinished = (readPage, pageCount) =>{
        
        if(readPage === pageCount){
            return true
        }
        if(readPage < pageCount){
            return false
        }
    }

    const newBook = {
        
        id,
        name, 
        year, 
        author, 
        summary, 
        publisher, 
        pageCount, 
        readPage,
        reading,
        insertedAt,
        updatedAt
    }

    bookshelf.push(newBook)
    
    const isSuccess = bookshelf.filter(book => book.id === id).length > 0
    
    if(isSuccess){
        const res = h.response({
          status:'success',
          message:'Buku berhasil ditambahkan',
          data:{
            bookId:id
          }  
        })
        res.code(201)
        return res
    }

    const res = h.response({
        status:'error',
        message: 'Buku gagal ditambahkan'

    })
    res.code(500)
    return res

}

module.exports = {createBooksHandler}