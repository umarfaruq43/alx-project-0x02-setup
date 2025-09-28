import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
    users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div>
            <Header />
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-6">Users</h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        const users: UserProps[] = data.map((user: any) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            address: {
                street: user.address.street,
                city: user.address.city,
            },
        }));

        return {
            props: {
                users,
            },
            revalidate: 60, // optional ISR
        };
    } catch (error) {
        console.error("Error fetching users:", error);
        return {
            props: {
                users: [],
            },
        };
    }
}

export default UsersPage;
