// import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl">Welcome to MovieMania!</h1>
        <p className="font-light">Your one-stop destination for movies and reviews.</p>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <Footer />
    </div>
  );
}
