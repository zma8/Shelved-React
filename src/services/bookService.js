const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/api/books`

const getToken=()=>localStorage.getItem('token')

const getAllBooks=async()=>{
    const res=await fetch(BASE_URL,{
        headers:{ Authorization:`Bearer ${getToken()}`
        },
    })
    const data=await res.json()
    if(data.err){
        throw new Error(data.err)
    }
    return data
}

const createBook=async(formData)=>{
    const res=await fetch(BASE_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${getToken()}`,
        },
        body:JSON.stringify(formData),
    })
    const data=await res.json()
    if(data.err){
        throw new Error (data.err)
    }
    return data
}

const updateBook=async(id,formData)=>{
    const res=await fetch(`${BASE_URL}/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${getToken()}`,
        },
        body:JSON.stringify(formData),
    })
    const data=await res.json()
    if(data.err){
        throw new Error (data.err)
    }
    return data
}

export{getAllBooks,createBook,updateBook}