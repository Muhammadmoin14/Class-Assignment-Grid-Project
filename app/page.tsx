import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-orange-100 w-screen h-screen ">
      <div className="grid grid-cols-10 gap-10 py-20 px-24 h-screen">
        <div className="bg-blue-500 text-center text-white shadow-lg rounded-md col-span-2 content-center"> <h1>Column 1</h1> </div>
        <div className="bg-yellow-200 text-center text-white shadow-lg rounded-md col-span-6 grid grid-cols-6 gap-x-6"> 
        <div className="bg-amber-300 text-white font-bold rounded md col-span-6 content-center">Column-2</div>
        <div className="bg-pink-300 text-white font-bold rounded md col-span-3 content-center">Column-3</div>
        <div className="bg-pink-300 text-white font-bold rounded md col-span-3 content-center">Column-4</div>
        <div className="bg-orange-400 text-white font-bold rounded md row-span-3 col-span-2 content-center">Column -5</div>
        <div className="bg-amber-300 text-white font-bold rounded md col-span-4 content-center">Column-6</div>
        <div className="bg-pink-300 text-white font-bold rounded md col-span-2 content-center">Column-7</div>
        <div className="bg-pink-300 text-white font-bold rounded md col-span-2 content-center">Column-8</div>
        <div className="bg-purple-400 text-white font-bold rounded md col-span-4 content-center">Column-9</div>
        </div>
        <div className="bg-blue-500 text-center text-white shadow-lg rounded-md col-span-2 content-center"> <h1>Column-10</h1> </div>
        
      </div>
    </div>
  );
}
