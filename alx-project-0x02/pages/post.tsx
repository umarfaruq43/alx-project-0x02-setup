import Header from "@/components/layout/Header";
import React from "react";

const PostsPage = () => {
    return (
        <div>
            <Header />
            <main className="p-6">
                <h1 className="text-3xl font-bold">Posts Page</h1>
                <p className="mt-4 text-lg">
                    This page will display all blog posts.
                </p>
            </main>
        </div>
    );
};

export default PostsPage;
