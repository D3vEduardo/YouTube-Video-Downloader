'use client'

import { YouTubePostBody } from "@/assets/types/YoutubePostTypes";
import { FormEvent, RefObject, useRef } from "react";

const handleSubmit = async (e: FormEvent<HTMLFormElement>, inputRef: RefObject<HTMLInputElement | null>, window: Window & typeof globalThis) => {
    const { alert, location } = window; const { protocol, host } = location;
    e.preventDefault();
    const youtubeVideoUrl = inputRef.current?.value;

    if (!youtubeVideoUrl || youtubeVideoUrl === "") {
        alert("Informe o url do vídeo no input!");
        return;
    }

    const apiUrl = `${protocol}//${host}`;

    const requestBody: YouTubePostBody = {
        format: "video",
        youtubeVideoUrl
    }

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    });

    return (await response.json());
}

export default function YoutubePage() {
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
                onSubmit={}
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