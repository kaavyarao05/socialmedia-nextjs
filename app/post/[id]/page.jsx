"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>;  //pathname is the path of the dynamic route [id]
}
