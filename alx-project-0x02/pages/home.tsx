import Card from "@/components/common/Card";

const home = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">About Us</h1>
            <div className="p-6 space-y-6">
                <h1 className="text-3xl font-bold mb-6">
                    Welcome to the Home Page
                </h1>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card
                        title="Getting Started"
                        content="Learn how to set up your Next.js project and explore the folder structure."
                    />
                    <Card
                        title="Components"
                        content="Understand how to create reusable components to speed up development."
                    />
                    <Card
                        title="Routing"
                        content="Dive into Next.js routing and how pages are created automatically."
                    />
                    <Card
                        title="Styling"
                        content="Discover Tailwind CSS integration for rapid and responsive design."
                    />
                </div>
            </div>
        </div>
    );
};

export default home;
