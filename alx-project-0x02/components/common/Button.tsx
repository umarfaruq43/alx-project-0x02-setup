import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
    label,
    size = "medium",
    shape = "rounded-md",
    onClick,
}) => {
    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={`bg-blue-600 text-white hover:bg-blue-700 transition ${sizeClasses[size]} ${shape}`}
        >
            {label}
        </button>
    );
};

export default Button;
