import Link from "next/link";
import {useRouter} from "next/router";
import style from "./NavBar.module.css";

export default function NavBar(){
    const router = useRouter();
    console.log(router)

    return (
        <nav>
            <Link href="/">
                <a className={`${style.link} ${router.pathname === "/" ? style.active : ""}`}>Home</a>
            </Link>
            <Link href="/about">
                <a className={[style.link, router.pathname === "/about" ? style.active : ""].join("")}>about</a>
            </Link>
        </nav>
    )
}