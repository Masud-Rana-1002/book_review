import { IoLocationOutline } from "react-icons/io5";

const ListedBooksCard = ({ book }) => {
  if(!book){
    return
  }
  console.log(book);
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
    <div>
      <div className="flex items-start gap-4 w-10/12 mx-auto border p-4 rounded-lg mt-16">
        <div className="text-center lg:text-left h-[350px] rounded-lg bg-base-200 p-12">
          <img className="h-full mx-auto  " src={image} alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold ">{bookName}</h2>
          <p className="text-xl font-medium text-[#131313CC]">by: {author}</p>
          <div className="flex items-center gap-3 border-b-2 max-w-full  pb-4">
            <p className="font-bold text-black">Tag</p>
            {tags.map((tag) => (
              <span className="py-1 px-3 rounded-xl  bg-[#23BE0A0D] text-[#23BE0A] font-medium">
                {" "}
                #{tag}
              </span>
            ))}
            <p className="flex items-center text-[#131313CC] gap-2">
              <IoLocationOutline className="text-2xl" /> Year of Publishing:{" "}
              {yearOfPublishing}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
