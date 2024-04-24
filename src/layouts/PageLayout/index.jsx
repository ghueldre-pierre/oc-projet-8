import { NavLink, Outlet } from "react-router-dom";
import { BrandLogo } from "../../components/BrandLogo";
import "./style.scss";

function PageLayout() {
    return <div className="page-body">
        <header className="page-header | main-container-wrapper">
            <div className="main-container">
                <BrandLogo />
                <nav>
                    <NavLink to={"/"}>Accueil</NavLink>
                    <NavLink to={"/a-propos"}>A propos</NavLink>
                </nav>
            </div>
        </header>
        <main className="page-main | main-container-wrapper">
            <div className="main-container">
                <Outlet />
            </div>
        </main>
        <footer className="page-footer">
            <BrandLogo />
            <p className="trademark">
                © 2024 Kasa. All rights reserved
            </p>
        </footer>
    </div>
}

export { PageLayout };