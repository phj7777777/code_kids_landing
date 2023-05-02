import React from 'react'
import Link from 'next/link'

export default function NavBarMain() {
    return (
        <nav>
            <ul>
                <li className="has-dropdown">
                    <Link href="/"><a>Home</a></Link>
                    <ul className="submenu">
                        <li><Link href="/"><a>Home 1</a></Link></li>
                        <li><Link href="/index-2"><a>Home 2</a></Link></li>
                        <li><Link href="/index-3"><a>Home 3</a></Link></li>
                        <li><Link href="/index-4"><a>Home 4</a></Link></li>
                        <li><Link href="/index-5"><a>Home 5</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li className="has-dropdown">
                    <Link href="#"><a>Services</a></Link>
                    <ul className="submenu">
                        <li><Link href="/services"><a>Services</a></Link></li>
                        <li><Link href="/services-details"><a>Services Details</a></Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="#"><a>Blog</a></Link>

                    <ul className="submenu">
                        <li><Link href="/blog"><a>Blog</a></Link></li>
                        <li><Link href="/blog-standard"><a>Blog Standard</a></Link></li>
                        <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="#"><a>Pages</a></Link>
                    <ul className="submenu">
                        <li><Link href="/faq"><a>Faq</a></Link></li>
                        <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                        <li><Link href="/portfolio-details"><a>Portfolio Details</a></Link></li>
                        <li><Link href="/team"><a>Team</a></Link></li>
                        <li><Link href="/team-details"><a>Team Details</a></Link></li>
                        <li><Link href="/error"><a>Error 404</a></Link></li>
                        <li><Link href="/sign-up"><a>Sign Up</a></Link></li>
                        <li><Link href="/sign-in"><a>Sign In</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </nav>


    )
}
