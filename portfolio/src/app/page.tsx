import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
        <h1 className="flex text-3xl font-extrabold mb-12"> DANIEL CHAVEZ </h1>

        <div className= "flex flex-col ">
          <h2 className="flex font-bold">About me:</h2>
          <p>Hi! I´m Daniel, an Engineer & Full Stack Developer based on <code>JavaScript</code> technologies.</p>
          <h2 className="flex font-bold mt-10">My Stack:</h2>
        </div>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div> */}
    </main>
  );
}
