"use client";

import { useState, useTransition } from "react";
import { likePost } from "./actions";
import "./styles.css"
import "../home/styles.css"

type likeButtonProps = {
    postId: number;
    initiallikes: number;
    hasliked: boolean;
};

export default function LikeButton({ postId, initiallikes, hasliked }: likeButtonProps) {
    const [likes, setLikes] = useState(initiallikes);
    const [liked, setLiked] = useState(hasliked);
    const [isPending, startTransition] = useTransition();
    
    const handleLike = () => {
        if (liked || isPending) return;

        setLikes((prev) => prev + 1);
        setLiked(true);

        startTransition(async () => {
            const result = await likePost(postId);
            if (!result.success) {
                setLikes((prev) => prev - 1);
                setLiked(false);
            }
        });
    };
    return(
        <div onClick={handleLike} className="flex w-min h-min shadow-[2px_2px_0px_#00000030] mb-5 bg-gray-200 pr-2 pl-2 hover:bg-gray-300 active:mt-0.5 active:mb-4.5 active:ml-0.5 active:shadow-[0px_0px_0px_#00000030]">
            <h1 className="text-[#e33ec5] font-[grapeSoda] text-3xl user-select-none">{liked ? "liked" : "likes"}</h1>
            <p className="text-3xl ml-3 font-[grapeSoda] user-select-none">{likes}</p>
        </div>
    )
}