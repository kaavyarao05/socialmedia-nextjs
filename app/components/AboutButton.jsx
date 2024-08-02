import React from "react";
import Link from "node_modules/next/link";

const Button = () => {
return (
<Link href={'/about/'} prefetch = {true}>
<button className="bg-green-400 rounded text-white hover:scale-110
px-5 py-2">
About
</button>
</Link>
);
};
export default Button;