import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="border rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-700 mb-1">📧 {email}</p>
            <p className="text-gray-600 text-sm">
                🏠 {address.street}, {address.city}
            </p>
        </div>
    );
};

export default UserCard;
