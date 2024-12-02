import Link from "next/link";

export default function NavBar(){
    return(
        <nav>
            <ul>
                <Link href="/"><li>Home</li></Link>
                <Link href="/"><li>About Us</li></Link>
                <Link href="/"><li>FAQ</li></Link>
                <Link href="/"><li>Contact</li></Link>
            </ul>
        </nav>
    )
}