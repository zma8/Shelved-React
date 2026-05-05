import { useState,useEffect } from "react"
import { useNavigate } from "react-router"
import { getAllBooks} from "../services/bookService"
import RandomPick from '../components/RandomPick'

const STATUSES=['Maybe today?', 'Loading...', 'Resting', 'Done enough', 'Not for me']

const HomePage = () => {
    const[books,setBooks]=useState([])
    const [error,setError]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
        const fetchBooks=async ()=>{
            try{
                const data=await getAllBooks()
                setBooks(data)
            }catch(err){
                setError('Could not load your books')
            }
        }
        fetchBooks()
    },[])

    const getCount=(status)=>books.filter((book)=>book.status===status).length

  return (
    <div className="home-container">
        <RandomPick books={books}/>
        <h2 className="stats-title">Quick look from your shelf</h2>
        <p className="home-total">Total books:{books.length}</p>
        {STATUSES.map((status)=>(
            <p key={status}>{status}:{getCount(status)}</p>
        ))}
        {error && <p className="home-error">{error}</p>}
        <button className="home-button" onClick={()=>navigate('/books')}>View your shelf</button>
    </div>
  )
}

export default HomePage