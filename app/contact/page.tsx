'use client'

import { useState } from "react"

export default function Contact() {
    const [email, setEmail] = useState('')
    const handleSubmit = async (e) => {
        e.preventdefault()

        await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({email}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        console.log('hey');
        
    }


    return <div>
        <form onSubmit={handleSubmit}>
            <input type="email" required value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    </div>
}



// 'use client'
// import Link from "next/link";
// import { useRouter } from "next/router";

// export default function Contact() {
//     const router = useRouter()
//     return <div>
//         <h1>Contact</h1>
//         <Link href="/">Home</Link>
//         <Link href="/blog/sdfdfd">post</Link>
//         <button onClick={() => router.push('/')}>home</button>
//     </div>
// }
