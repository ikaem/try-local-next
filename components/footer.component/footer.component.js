import Link from "next/link";

export default () => {
    return (
    <footer>
        <Link href="#"><a><i className="fab fa-facebook-square"></i></a></Link>
        <Link href="#"><a><i className="fab fa-twitter-square"></i></a></Link>
        <a href="mailto:info@trylocal.com">
            <i className="fas fa-envelope-square"></i>
            <span> info@trylocal.com</span>
        </a>
        <a href="tel:+38552525252">
            <i className="fas fa-phone-square"></i>
            <span> +38552525252</span>
        </a>
        <style jsx>{`
            footer {
                display: flex;
                justify-content: flex-end;
                background-color: var(--fourthColor);
                align-items: center;
                padding: 0.7rem 1rem;
            }
            footer a {
                margin-left: 0.9rem;
                color: white;
            }
            footer i {
                font-size: 1.3rem;
            }

            footer a:hover {
                color: var(--thirdColor);
            }

            @media screen and (max-width: 420px) {
                span {
                    display: none;
                }
            }
        `}</style>
    </footer>
    )
}