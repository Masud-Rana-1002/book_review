import { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {
    const [bookData, setBookData ] = useState([])
    const [moreViwe, setMoreViwe] = useState(6)
    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBookData(data))
    },[])

    return (
        <div className="mb-4 space-y-3">
           <div className="text-center my-10 ">
            <h3 className="text-4xl font-bold">Books</h3>
           </div>
           <div className="grid grid-cols-3 gap-6 justify-center items-center w-11/12 mx-auto ">
                {
                    bookData.slice(0, moreViwe).map(book => <Book key={book.bookId} book={book}></Book>)
                }
               
           </div>
           {moreViwe !== 6 ? <div className="text-center">
                <button onClick={()=> setMoreViwe(6)} className="px-8 py-2 rounded-md bg-green-600 text-white font-semibold ">Less</button>
                </div> : <div className="text-center">
                <button onClick={()=> setMoreViwe(9)} className="px-8 py-2 rounded-md bg-green-600 text-white font-semibold ">View More</button>
                </div>}
           
        </div>
    );
};

export default Books;