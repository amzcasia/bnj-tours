import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="bg-gray-300">
            <ul className="flex gap-x-2">
                <Link href="/"><li>Home</li></Link>
                <Link href="/"><li>About Us</li></Link>
                <Link href="/"><li>FAQ</li></Link>
                <Link href="/"><li>Contact</li></Link>
            </ul>
        </nav>
    )
}