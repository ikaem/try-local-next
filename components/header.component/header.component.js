import Link from "next/link";

export default () => {
    return (
    <header>
        <h1 className="logo">
            <span>Try</span>
            <span>Local</span>
        </h1>
        <nav>
            <ul>
                <li><Link href="/index"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About Try Local</a></Link></li>
                <li><Link href="/landing"><a>Landing</a></Link></li>
            </ul>
        </nav>
        <style jsx>{`
            header {
                display: flex;
                justify-content: space-between;
                background-color: var(--fourthColor);
                align-items: center;
                padding: 0.7rem 1rem;
            }
            .logo {
                font-size: 1.5rem;
                color: white;
                text-transform: uppercase;
                text-shadow: 0 1px 1px rgb(97, 97, 97);
            }
            .logo > span:first-child {
                color: white;
                font-weight: normal;
                text-transform: capitalize;
            }
            .logo > span:last-child {
                color: var(--thirdColor);
            }
            header ul {
                display: flex;
                margin-top: 0.4rem;
            }
            header li:last-child {
                margin-left: 0.9rem;
            }
            header a {
                color: white;
            }
            header a:hover {
                color: var(--thirdColor);
            }
        `}</style>
    </header>
    )
}