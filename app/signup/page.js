'use client';
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();
    const { result, error } = await signUp(email, password);
    if (error) return console.log(error);
    console.log(result);
    router.push("/admin");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleForm}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
