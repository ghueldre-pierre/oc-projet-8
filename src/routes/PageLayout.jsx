import { Link, Outlet } from "react-router-dom";

function PageLayout() {
    return <>
        <header>
            <p>Kasa</p>
            <nav>
                <Link to={"/"}>Accueil</Link>
                <Link to={"/a-propos"}>A propos</Link>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>© 2024 Kasa. All rights reserved</footer>
    </>
}

export { PageLayout };