import { useState,useEffect } from "react"
import { useNavigate } from "react-router"
import { getAllBooks} from "../services/bookService"
import RandomPick from '../components/RandomPick'

const STATUSES=['Maybe today?', 'Loading...', 'Resting', 'Done', 'Not for me']

const MOTIVATIONAL = {
  'Maybe today?': (count) => `${count} book${count !== 1 ? 's' : ''} waiting for their moment`,
  'Loading...': (count) => `You're reading ${count} book${count !== 1 ? 's' : ''} right now`,
  'Resting': (count) => `${count} book${count !== 1 ? 's' : ''} taking a little break`,
  'Done': (count) => `You've finished ${count} book${count !== 1 ? 's' : ''} — well done`,
  'Not for me': (count) => `${count} book${count !== 1 ? 's' : ''} weren't your thing, and that's okay`,
}

const STATUS_COLORS = {
  'Maybe today?': '#F4A261',
  'Loading...': '#2A9D8F',
  'Resting': '#8ECAE6',
  'Done': '#95D5B2',
  'Not for me': '#E9C46A',
}


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
        <p className="stats-total">Total books:{books.length}</p>
        <div className="stats-grid">
        {STATUSES.map((status)=>(
            <div className="stat-card" key={status} style={{borderLeft:`4px solid ${STATUS_COLORS[status]}`}}>
                <span className="stat-number" style={{color:STATUS_COLORS[status]}}>
                    {getCount(status)}
                </span>
            <p className='stat-message'>{MOTIVATIONAL[status](getCount(status))}</p>
        </div>
        ))}
        </div>
        {error && <p className="home-error">{error}</p>}
        <button className="home-button" onClick={()=>navigate('/books')}>View your shelf</button>
    </div>
  )
}

export default HomePage