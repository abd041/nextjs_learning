import Link from "next/link";
import UserCard from "./components/UserCard";

export default function Home() {
  return (
    <div className="">
    <Link href="/users" >Users Page</Link>
    <Link href="/users/user" >New User Page</Link>
    <UserCard/>
    </div>
  );
}
