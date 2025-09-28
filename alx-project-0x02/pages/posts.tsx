import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
    posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
    return (
        <div>
            <Header />
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-6">Posts Page</h1>

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
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
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

        return {
            props: {
                posts: formattedPosts,
            },
            revalidate: 60, // optional: ISR (regenerates every 60s)
        };
    } catch (error) {
        console.error("Error fetching posts:", error);
        return {
            props: {
                posts: [],
            },
        };
    }
};

export default PostsPage;
