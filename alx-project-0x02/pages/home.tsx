import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

const Home = () => {
    const [posts, setPosts] = useState([
        {
            title: "Getting Started",
            content:
                "Learn how to set up your Next.js project and explore the folder structure.",
        },
        {
            title: "Components",
            content:
                "Understand how to create reusable components to speed up development.",
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPost = (post: { title: string; content: string }) => {
        setPosts((prev) => [...prev, post]);
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold mb-6">
                Welcome to the Home Page
            </h1>

            <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
                + Add Post
            </button>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
                {posts.map((post, index) => (
                    <Card
                        key={index}
                        title={post.title}
                        content={post.content}
                    />
                ))}
            </div>

            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddPost}
            />
        </div>
    );
};

export default Home;
