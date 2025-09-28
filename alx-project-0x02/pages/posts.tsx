import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Posts = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=10"
                );
                const data = await res.json();
                const formattedPosts: PostProps[] = data.map((post: any) => ({
                    title: post.title,
                    content: post.body,
                    userId: post.userId,
                }));
                setPosts(formattedPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <Header />
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-6">Posts Page</h1>

                {loading ? (
                    <p>Loading posts...</p>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {posts.map((post, index) => (
                            <PostCard
                                key={index}
                                title={post.title}
                                content={post.content}
                                userId={post.userId}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Posts;
