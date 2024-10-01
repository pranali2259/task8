import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Counter">Counter</Link>
        </li>
      </ul>
    </nav>
    <h1 style={{textAlign:'center', marginTop:'250px'}}>home page</h1>
    
  </div>
  );
}
