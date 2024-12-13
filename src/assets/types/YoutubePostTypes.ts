export type YouTubePostBody = {
    youtubeVideoUrl: string,
    format: "video" | "audio",
}

export interface YouTubeVideoFormat {
    mimeType: string;
    qualityLabel: string | null;
    bitrate: number | null;
    url: string;
    container: string;
    codecs: string | null;
    videoCodec?: string | null;
    audioCodec?: string | null;
    isLive?: boolean;
    isHLS?: boolean;
    isDashMPD?: boolean;
}

export interface YouTubeVideoDetails {
    title: string;
    duration: string;
    description: string;
}

export interface SuccessResponse {
    returnType: "success";
    message: string;
    videoFormat: YouTubeVideoFormat;
    videoDetails: YouTubeVideoDetails;
}

export interface ErrorResponse {
    returnType: "error";
    message: string;
    errorMessage?: unknown;
}

export type YouTubePostResponse = SuccessResponse | ErrorResponse;