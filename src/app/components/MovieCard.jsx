import Link from 'next/link';
// import styles from './MovieCard.module.css';

const MovieCard = ({number}) => {
  return (
    <div className="bg-white shadow-md p-4 w-[220px] text-sm rounded-lg">
      <div className='text-lg font-bold text-center'>This is card no. {number}</div>
      <p>Title</p>
      <p>Genre: </p>
      <p>Rating:</p>
      <div className='mt-2 bg-green-700 text-white px-4 py-2 text-center rounded-md hover:shadow-md'>
        <Link href='/'>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
