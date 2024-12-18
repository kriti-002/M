// import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl">Welcome to MovieMania!</h1>
        <p className="font-light">Your one-stop destination for movies and reviews.</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">

        {[1,2,3,4].map((item,index)=>(
          <MovieCard number={item} key={index}/>
        ))}
      </div>
      <Footer />
    </div>
  );
}
