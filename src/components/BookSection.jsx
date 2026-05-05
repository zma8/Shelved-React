import BookCard from './BookCard'

const BookSection = ({ status, books, onUpdate }) => {
  return (
    <div className='booksection-container'>
      <h3 className='booksection-title'>{status}({books.length})</h3>
      {books.map((book) => (
        <BookCard key={book._id} book={book} onUpdate={onUpdate}/>
      ))}
    </div>
  )
}

export default BookSection