import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <Link href="/">
                <div>home</div>
            </Link>
            <Link href="/about">
                <div>about</div>
            </Link>
        </nav>
        // <nav>
        //     <a href="/">home</a>
        //     <a href="/about">about</a>
        // </nav>
    )
}