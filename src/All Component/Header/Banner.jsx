import { Link } from 'react-router-dom';
import bannerImg from '../../assets/miracleMorning.png'
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 py-10 mt-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-lg rounded-lg "
          />
          <div className="max-w-lg space-y-4">
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
           <div>
           <Link to="/listedBooks"><button className="px-3 py-2 rounded-md bg-green-600 text-white font-semibold">View The List</button></Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
