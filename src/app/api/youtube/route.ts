import { NextRequest, NextResponse } from "next/server";
import ytdl from "@distube/ytdl-core";

export async function GET(req: NextRequest) {
    const requestUrl = new URL(req.url);
    const youtubeVideoUrl = requestUrl.searchParams.get("videoUrl");

    if (!youtubeVideoUrl || !ytdl.validateURL(youtubeVideoUrl)) {
        return NextResponse.json({ returnType: "error", message: "Url não informada ou inválida!" });
    }

    const videoInfo = await ytdl.getInfo(youtubeVideoUrl);
    const videoFormats = ytdl.filterFormats(videoInfo.formats, "video");
    const mp4Format = videoFormats.find(format => format.container === "mp4");

    if (!mp4Format) {
        return NextResponse.json({ returnType: "error", message: "Nenhum vídeo encontrado!" });
    }

    return NextResponse.json({
        returnType: "success",
        message: "Sucesso ao baixar o vídeo!",
        videoFormat: {
            mimeType: mp4Format.mimeType,
            qualityLabel: mp4Format.qualityLabel,
            bitrate: mp4Format.bitrate,
            url: mp4Format.url,
            container: mp4Format.container,
            codecs: mp4Format.codecs,
            videoCodec: mp4Format.videoCodec,
            audioCodec: mp4Format.audioCodec,
            isLive: mp4Format.isLive,
            isHLS: mp4Format.isHLS,
            isDashMPD: mp4Format.isDashMPD,
        },
        videoDetails: {
            title: videoInfo.videoDetails.title,
            duration: videoInfo.videoDetails.lengthSeconds,
            description: videoInfo.videoDetails.description,
        },
        });
}