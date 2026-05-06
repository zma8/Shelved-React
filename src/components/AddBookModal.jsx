import { useState } from "react"

const STATUSES = ['Maybe today?', 'Loading...', 'Resting', 'Done', 'Not for me']

const AddBookModal = ({ onAdd, onClose }) => {
    const [formData,setFormData]=useState({
        title: '',
        status: 'Maybe today?',
        note: '',
        mood: '',
    })
    const[error,setError]=useState('')

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!formData.title){
            setError('Title is required')
            return
        }
        try{
            await onAdd(formData)
        }catch(err){
            setError('Could not add book')
        }
    }

  return(
    <>
 <div className="modal-overlay" onClick={onClose}></div>
  <div className="addbookmodal-container" onClick={(e)=>e.stopPropagation()} >
    <h2 className="addbookmodal-title">Add a book</h2>
    <form className="addbookmodal-form" onSubmit={handleSubmit}>
        <input className="addbookmodal-input"
            type='text'
            name='title'
            placeholder='title'
            value={formData.title}
            onChange={handleChange}
            required
        />
        <input className="addbookmodal-input"
            type='text'
            name='note'
            placeholder='Why did you add this book? (optional)'
            value={formData.note}
            onChange={handleChange}
        />
        <select className="addbookmodal-inputselect" 
            name='status'
            value={formData.status}
            onChange={handleChange}
        >
            {STATUSES.map((status)=>(
                <option className="addbookmodal-option" key={status} value={status}>{status}</option>
            ))}
        </select>
        <select className="addbookmodal-inputselect" 
            name='mood'
            value={formData.mood}
            onChange={handleChange}
        >
            <option className="addbookmodal-option" value=''>No mood</option>
            <option className="addbookmodal-option" value='light'>Light</option>
            <option className="addbookmodal-option" value='deep'>Deep</option>
            <option className="addbookmodal-option" value='short'>Short</option>
        </select>
        {error && <p className="addbookmodal-error">{error}</p>}
        <button className="addbookmodal-button" type="submit">Add book</button>
        <button className="addbookmodal-button" type="button" onClick={onClose}>Cancel</button>
    </form>
  </div>
  </>
    ) 
}

export default AddBookModal