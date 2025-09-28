import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
            <h1 className="text-xl font-bold">My Next.js Project</h1>
            <nav className="flex gap-6">
                <Link href="/home" className="text-blue-600 hover:underline">
                    Home
                </Link>
                <Link href="/about" className="text-blue-600 hover:underline">
                    About
                </Link>
                <Link href="/posts" className="text-blue-600 hover:underline">
                    Posts
                </Link>
            </nav>
        </header>
    );
};

export default Header;
