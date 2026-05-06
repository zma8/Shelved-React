import { useState } from "react"

const STATUSES = ['Maybe today?', 'Loading...', 'Resting', 'Done', 'Not for me']


const EditBookModal = ({ book, onUpdate, onClose }) => {
    const [formData,setFormData]=useState({
        title: book.title,
        status: book.status,
        note: book.note || '',
        mood: book.mood || '',
        highlight: book.highlight || '',
    })
    const [showHighlightPopup,setShowHighlightPopup]=useState(false)
    const [highlightText,setHighlightText]=useState('')
    const [pendingFormData,setPendingFormData]=useState(null)
    const [error,setError]=useState('')

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit =async (e)=>{
        e.preventDefault()
        if(!formData.title){
            setError('Title is required')
            return
        }
        if(formData.status==='Done'&&book.status!=='Done'){
            setPendingFormData(formData)
            setShowHighlightPopup(true)
            return
        }
        if(formData.status==='Not for me'&&book.status!=='Not for me'){
            setPendingFormData(formData)
            setShowHighlightPopup(true)
            return
        }
        try{
            await onUpdate(formData)
        }catch(err){
            setError('Could not update book')
        }
    } 

    const handleHighlightSubmit=async()=>{
        try{
            await onUpdate({...pendingFormData,highlight: highlightText})
            setShowHighlightPopup(false)
        }catch(err){
            setError('Could not update book')
        }
    }

    const handleHighlightSkip=async()=>{
        try{
            await onUpdate(pendingFormData)
            setShowHighlightPopup(false)
        }catch(err){
            setError('Could not update book')
        }
    }

    if(showHighlightPopup){
        return(
            <>
                <div className="modal-overlay" onClick={onClose}/>
                <div className="editbook-container" onClick={(e)=>e.stopPropagation()}>
                    <h2 className="editbook-title">
                        {pendingFormData.status==='Done'
                        ? 'What was your favourite part?'
                        :'What didnt work for you ?'}
                    </h2>
                    <textarea className="editbook-textarea"
                    placeholder={
                        pendingFormData.status==='Done'
                        ? 'Amoment , a quote, a feeling...'
                        : 'Too slow , not my genre, wrong timing'
                    }
                    value={highlightText}
                    onChange={(e)=> setHighlightText(e.target.value)}
                    />
                    <button className="editbook-button" onClick={handleHighlightSubmit}>Save</button>
                    <button className="editbook-button" onClick={handleHighlightSkip}>Skip</button>
                </div>
            </>
        )
    }

  return (
    <>
 <div className="modal-overlay" onClick={onClose}></div>
    <div className="editbook-container" onClick={(e)=>e.stopPropagation()}>
        <h2 className="editbook-title">Edit book</h2>
        <form className="editbook-form" onSubmit={handleSubmit}>
            <input className="editbook-input"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <input className="editbook-input"
                type="text"
                name="note"
                placeholder="Why did you add this book? (optional)"
                value={formData.note}
                onChange={handleChange}
            />
            <select className="editbook-select" 
                name="status"
                value={formData.status}
                onChange={handleChange}
            >
                {STATUSES.map((status)=>(
                    <option className="editbook-option" key={status} value={status}>{status}</option>
                ))}
            </select>
            <select className="editbook-select"
                name="mood"
                value={formData.mood}
                onChange={handleChange}
            >
                <option className="editbook-option" value=''>No mood</option>
                <option className="editbook-option" value='light'>Light</option>
                <option className="editbook-option" value='deep'>Deep</option>
                <option className="editbook-option" value='short'>Short</option>
            </select>
            {error && <p className="editbook-error">{error}</p>}
            <button className="editbook-button" type="submit">Save</button>
            <button className="editbook-button" type="button" onClick={onClose}>Cancel</button>
        </form>
    </div>
    </>
  )
}

export default EditBookModal