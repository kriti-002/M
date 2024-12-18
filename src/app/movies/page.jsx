// app/movies/page.jsx
import Card from "@/components/MovieCard";

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 9 },
  { id: 2, title: "Avengers", genre: "Action", rating: 8.5 },
];

export default function MoviesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">All Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Card key={movie.id} title={movie.title} genre={movie.genre} rating={movie.rating} />
        ))}
      </div>
    </div>
  );
}
