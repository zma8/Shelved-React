import { useMemo } from "react"


const RandomPick = ({ books }) => {
  const waitingBooks=books.filter((book)=>book.status==='Maybe today?')

  const randomBook=useMemo(()=>{
    if(waitingBooks.length===0) return null

    const randomIndex=Math.floor(Math.random()*waitingBooks.length)
    return waitingBooks[randomIndex]
  },[books])

  if(!randomBook) return null

  return (
    <div className="randompick-container">
        <p className="randompick-title">This one's been waiting...</p>
        <h3 className="randompick-booktitle">{randomBook.title}</h3>
        {randomBook.note&&<p>{randomBook.note}</p>}
        <p>Feel like it today?</p>
    </div>
    )
}

export default RandomPick