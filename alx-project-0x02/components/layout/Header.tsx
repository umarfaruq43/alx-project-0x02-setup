import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-200 shadow">
            <h1 className="text-xl font-bold">My Next.js Project</h1>
            <nav className="flex gap-4">
                <Link href="/home" className="text-blue-600 hover:underline">
                    Home
                </Link>
                <Link href="/about" className="text-blue-600 hover:underline">
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;
