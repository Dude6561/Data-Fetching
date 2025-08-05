import { useState } from "react";

type User = {
  id: Number;
  name: String;
  username: String;
  email: String;
  phone: String;
};

export default function UserClient() {
  const [users, setUsers] = useState<User[]>();
  const [laoding, setLoading] = useState(true);
  const [error, setError] = useState("");
  return <div></div>;
}
