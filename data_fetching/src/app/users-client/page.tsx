"use client";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: String;
  username: String;
  email: String;
  phone: String;
};

export default function UserClient() {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function FetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("failed to fetch user");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An Unknown Error Occured");
        }
      } finally {
        setLoading(false);
      }
    }
    FetchUser();
  }, []);

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <ul className="flex flex-col">
        {users?.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <div>{user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
