const BookSection = ({ status, books, onUpdate }) => {
  return (
    <div>
      <h3>{status}</h3>
      {books.map((book) => (
        <p key={book._id}>{book.title}</p>
      ))}
    </div>
  )
}

export default BookSection