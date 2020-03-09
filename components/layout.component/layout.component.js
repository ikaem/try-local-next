import Head from "next/head";
import GlobalStyle from "../../styles/global";


import Header from "../header.component/header.component";
import Footer from "../footer.component/footer.component";

export default ({children}) => {
    return (
    <>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"/>
        </Head>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
    </>
    )
}