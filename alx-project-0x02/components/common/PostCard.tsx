import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="border rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{content}</p>
            <span className="text-sm text-gray-500">User ID: {userId}</span>
        </div>
    );
};

export default PostCard;
