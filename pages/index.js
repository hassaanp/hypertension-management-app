import Head from "next/head";
import Image from "next/image";

function HomePage() {
  return (
    <div className="font-nunito flex flex-col w-full h-screen justify-around items-center">
      <h1 className="text-3xl font-bold w-full p-2 text-center">
        Hypertension Management Application
      </h1>
      <div>
        <Image
          src="/pressure.png"
          alt="heart pressure"
          height="200"
          width="200"
        />
      </div>
      <div className="flex flex-col space-y-1 w-64">
        <button className="border bg-black border-black rounded text-white p-4">
          Sign in
        </button>
        <button className="border bg-black border-black rounded text-white p-4">
          Register
        </button>
      </div>
    </div>
  );
}

export default HomePage;
