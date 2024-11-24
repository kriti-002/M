"use client"
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  console.log("id",id)
  return (
    <div >
      <h1>Hello</h1>
    </div>
  );
};

export default Page;
