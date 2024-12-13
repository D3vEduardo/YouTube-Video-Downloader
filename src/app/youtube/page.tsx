'use client'

import {useRouter} from "next/navigation";
import { useRef } from "react";

export default function YoutubePage() {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="w-screen h-screen flex flex-col items-center">
            <div className="text-center mt-8 bg-royalblue-900 p-8
            rounded-xl shadow-lg"
            >
                <h1 className="text-4xl text-gradient-primary font-black"
                >Convert +</h1>
                <h2 className="text-2xl text-gradient-secondary font-bold">YouTube Converter</h2>
                <form className="flex justify-center items-center gap-x-2"
                onSubmit={
                    e => {
                        e.preventDefault();
                        const videoUrl = inputRef.current?.value;

                        if (!videoUrl) {
                            alert("Url não informado!");
                            return;
                        }

                        router.push(`/api/youtube?videoUrl=${videoUrl}`);
                    }
                }
                >
                    <input type="text" name="video-url-input" id="video-url-input"
                    className="bg-royalblue-100 rounded-md h-12 w-80 mt-4
                    outline-none border-royalblue-400 border-2 text-royalblue-900 px-2"
                    placeholder="Digite aqui o url do vídeo:"
                    ref={inputRef}
                    />
                    <button type="submit" className="h-12 px-4 py-6 bg-gradient-primary
                    mt-4 flex justify-center items-center text-royalblue-50 font-extrabold
                    rounded-lg"
                    >Procurar</button>
                </form>
            </div>
        </div>
    )
}