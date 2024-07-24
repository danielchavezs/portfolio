import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/contactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
        <h1 className="flex text-3xl font-extrabold mb-2"> DANIEL CHAVEZ </h1>
        <p>Engineer & Full Stack Developer based on <code>JavaScript</code> technologies.</p>

        <div className= "flex flex-col justify-items-start w-full border-2">
          {/* <h2 className="flex font-bold">About me:</h2> */}
          <h2 className="flex font-bold m-6 ml-0">My Stack:</h2>
            <ul> JavaScript </ul>
            <ul> TypeScript </ul>
            <ul> Express </ul>
            <ul> Jest </ul>
            <ul> PostgreSQL </ul>
            <ul> Sequelize </ul>
            <ul> React </ul>
            <ul> Next.js </ul>
            <ul> Redux </ul>
            <ul> CSS </ul>
            <ul> Tailwind CSS </ul>               
        </div>
      <ContactForm/>
    </main>
  );
}
