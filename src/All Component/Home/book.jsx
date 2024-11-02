import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  
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

  return (
    <Link to= {`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96  border space-y-4 p-6">
        <figure className="w-full h-60 bg-[#F3F3F3]">
          <img className="h-full  p-6 " src={image} alt="Book" />
        </figure>
        <div className=" ">
          <div className="flex gap-3 ">
            {tags.map((tag) => (
              <p className="py-1 px-3 rounded-xl  bg-[#23BE0A0D] text-[#23BE0A] font-medium">
                {tag}
              </p>
            ))}
          </div>
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className="font-medium text-[#131313CC]">by: {author}</p>
          <div className=" flex  justify-between pt-4 border-t-2 mt-6 border-dashed font-medium">
            <p>{category}</p>
            <div className="flex items-center gap-1 ">
              <p>{rating}</p>
              <CiStar className="text-xl"></CiStar>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
