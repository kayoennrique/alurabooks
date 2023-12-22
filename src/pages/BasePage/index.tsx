import { Outlet } from "react-router-dom";
import BarNavigation from "../../components/BarNavigation";
import Footer from "../../components/Footer";

const BasePage = () => {
    return (<main>
        <BarNavigation />
        <Outlet />
        <Footer />
    </main>)
}

export default BasePage;