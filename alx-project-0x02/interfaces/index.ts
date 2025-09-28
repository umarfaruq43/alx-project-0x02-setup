export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: { title: string; content: string }) => void;
}
export interface ButtonProps {
    label: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    onClick?: () => void;
}

export interface PostProps {
    title: string;
    content: string;
    userId: number;
}

export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
    };
}
