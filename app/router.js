const {createBooksHandler} = require('./handler')

const router = [
    {
        method:'GET',
        path:'/',
        handler: ()=>{
            return "This is a homepage"
        }
    },
    {
        method:'*',
        path:'/',
        handler: () => {
            return 'Cannot access using this method'
        }
    },
    {
        method:'POST',
        path:'/books',
        handler: createBooksHandler
    }
]

module.exports = router