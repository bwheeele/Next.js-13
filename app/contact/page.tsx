'use client'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Contact() {
    const router = useRouter()
    return <div>
        <h1>Contact</h1>
        <Link href="/">Home</Link>
        <Link href="/blog/sdfdfd">post</Link>
        <button onClick={() => router.push('/')}>home</button>
    </div>
}
