import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
        <Link
          href={`/launch?iss=https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSIsImoiOiIxIiwiYiI6IjMyY2Q5ZmE0LTdhMzItNGRlMS1iY2UyLTU0OGUzNzE1MTU0MCJ9/fhir&aud=`}
          className="border bg-black border-black rounded text-white p-4"
        >
          Sign in
        </Link>
        {/* <button className="border bg-black border-black rounded text-white p-4">
          Register
        </button> */}
      </div>
    </div>
  );
}

export default HomePage;
