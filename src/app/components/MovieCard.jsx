import Link from 'next/link';
// import styles from './MovieCard.module.css';

const MovieCard = () => {
  return (
    <div className="bg-emerald-900">
      <h3>title</h3>
      <p>Genre: </p>
      <p>Rating:</p>
      <Link href='/' className="bg-slate-900 text-blue-50">
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
