import Footer from "../common/Footer";
import Header from "../common/Headers";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps){
    return(
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}

export default Layout;