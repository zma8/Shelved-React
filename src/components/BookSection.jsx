import BookCard from './BookCard'

const STATUS_COLORS = {
  'Maybe today?': '#F4A261',
  'Loading...': '#2A9D8F',
  'Resting': '#8ECAE6',
  'Done': '#95D5B2',
  'Not for me': '#E9C46A',
}

const BookSection = ({ status, books, onUpdate }) => {
  return (
    <div className='booksection-container'>
      <h3 className='booksection-title' style={{ color: STATUS_COLORS[status] }} >{status}({books.length})</h3>
      {books.map((book) => (
        <BookCard key={book._id} book={book} onUpdate={onUpdate}/>
      ))}
    </div>
  )
}

export default BookSection