import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const about = () => {
    return (
        <div className="p-6">
            <Header />
            <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
            <p className="mt-4 text-lg">
                This is the main landing page of the project.
            </p>
            <div className="flex gap-4 mt-6">
                <Button label="Small" size="small" shape="rounded-sm" />
                <Button label="Medium" size="medium" shape="rounded-md" />
                <Button label="Large" size="large" shape="rounded-full" />
            </div>
        </div>
    );
};

export default about;
