import { useState,useEffect } from "react"
import { getAllBooks,createBook, updateBook } from "../services/bookService"
import BookSection from'../components/BookSection'
import AddBookModal from '../components/AddBookModal'

const STATUSES=['Maybe today?', 'Loading...', 'Resting', 'Done enough', 'Not for me']

const BooksPage = () => {
    const [books,setBooks]=useState([])
    const [showAddModal,setShowAddModal]=useState(false)
    const [error,setError]=useState('')

    useEffect(()=>{
        const fetchBooks=async ()=>{
            try{
                const data=await getAllBooks()
                setBooks(data)
            }catch(err){
                setError('Could not load your books')
            }
        }
        fetchBooks(0)
    },[])

    const handleAddBook=async(formData)=>{
        try{
            const newBook=await createBook(formData)
            setBooks([newBook,...books])
            setShowAddModal(false)
        }catch(err){
            setError('Could not add book')
        }
    }

    const handleUpdateBook=async (IdleDeadline,formData)=>{
        try{
            const updateBook=await updateBook(id,formData)
            setBooks(books.map((book)=> (book._id===id?updateBook:book)))
        }catch(err){
            setError('Could not update book')
        }
    }
    
    const getBookByStatus=(status)=>books.filter((book)=>book.status===status)
     
  return (
    <div className="books-container">
      <button className="books-button" onClick={()=>setShowAddModal(true)}>+Add book</button>
       {error && <p className="books-error">{error}</p>}
       {STATUSES.map((status)=>(
        getBookByStatus(status).length>0&&(
            <BookSection
            key={status}
            status={status}
            books={getBookByStatus(status)}
            onUpdate={handleUpdateBook}
        />
        )
       ))}
        {showAddModal&&(
            <AddBookModal
            onAdd={handleAddBook}
            onClose={()=>setShowAddModal(false)}
        />
        )}
    </div>
  )
}

export default BooksPage