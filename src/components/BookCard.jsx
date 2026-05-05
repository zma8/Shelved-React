import { useState } from "react";
import StatusBadge from './StatusBadge'
import EditBookModal from './EditBookModal'

const BookCard=({book,onUpdate})=>{
    const [showEditModal,setShowEditModal]=useState(false)

    const handleUpdate=async (formData)=>{
        await onUpdate(book._id,formData)
        setShowEditModal(false)
    }

    const formatDate=(date)=>{
        if(!date)return 'Never opened'
        return new Date(date).toLocaleDateString('en-GB',{
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        })
    }

    return(
        <div className="bookcard-container">
            <h4 className="bookcard-title">{book.title}</h4>
            <StatusBadge status={book.status}/>
            {book.note &&<p>{book.note}</p>}
            <p>Last opened: {formatDate(book.lastOpened)}</p>
            <button className="bookcard-button" onClick={()=>setShowEditModal(true)}>Edit</button>
            {showEditModal &&(
                <EditBookModal
                    book={book}
                    onUpdate={handleUpdate}
                    onClose={()=>setShowEditModal(false)}
                />
            )}
        </div>
    )
}

export default BookCard