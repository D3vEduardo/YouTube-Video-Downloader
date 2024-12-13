'use client'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="text-6xl font-black text-gradient-primary"
        >Converter+</h1>
        <h2 className="text-xl text-zinc-800">Converta de tudo e muito mais.</h2>
        <button className="mt-8 rounded-md shadow-md px-4 py-6 text-center
        bg-gradient-primary text-white font-black text-xl hover:shadow-lg
        hover:-translate-y-1 transition-all ease-in-out duration-300"
        onClick={() => router.push("/youtube")}
        >
          Youtube Converter
        </button>
      </header>
    </main>
  )
}