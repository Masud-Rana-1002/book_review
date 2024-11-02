import { data } from "autoprefixer";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import LevelContext from "../../LevelContext";

const BookDetails = () => {

  const bookDetailsData = useLoaderData();
  const { id } = useParams();
  const convertToNumber = parseInt(id);
  // console.log(bookDetailsData)
  const book = bookDetailsData.find((book) => book.bookId === convertToNumber);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  // console.log(book);
  const {readBook, setReadBook} = useContext(LevelContext)
  const handelData =(data)=>{
    if(data){
      setReadBook([...readBook, data])

    }else{
      return
    }
  }
  return (
    <div>
      <div className="hero  py-10">
        <div className="flex gap-8 ">
          <div className="text-center lg:text-left h-[750px]  flex-1 bg-base-200 rounded-lg">
            <img className="h-full mx-auto p-12  " src={image} alt="" />
          </div>
          <div className="flex-1 space-y-3 ">
            <h2 className="text-4xl font-bold ">{bookName}</h2>
            <p className="text-xl font-medium text-[#131313CC]">by: {author}</p>
            <div className="border-y-2  ">
              <p className="py-4 text-xl font-medium">{category}</p>
            </div>
            <p>
              <span className="text-black font-medium">Review: </span>
              <span className="text-[#131313B3]"> {review}</span>
            </p>
            <div className="flex items-center gap-3 border-b-2 pb-4">
                <p className="font-bold text-black">Tag</p>
                { 
                    tags.map(tag => <span className="py-1 px-3 rounded-xl  bg-[#23BE0A0D] text-[#23BE0A] font-medium"> #{tag}</span>)
                }
            </div>
            <div  className="flex items-center  gap-20">
                <p className="text-[#131313B3]">Number of Pages:</p>
                <p className="text-black font-semibold">{totalPages}</p>
            </div>
            <div  className="flex items-center  gap-36">
                <p className="text-[#131313B3]">Publisher:</p>
                <p className="text-black font-semibold">{publisher}</p>
            </div>
            <div  className="flex items-center  gap-20">
                <p className="text-[#131313B3]">Year of Publishing:</p>
                <p className="text-black font-semibold">{yearOfPublishing}</p>
            </div>
            <div  className="flex items-center  gap-44">
                <p className="text-[#131313B3]">Rating:</p>
                <p className="text-black font-semibold">{rating}</p>
            </div>
            <div className="space-x-4">
                <button onClick={()=> handelData(book)} className="px-3 py-2 rounded-md  border-2 font-semibold">Read</button>
                <button className="px-3 py-2 rounded-md bg-[#59C6D2] text-white font-semibold">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
