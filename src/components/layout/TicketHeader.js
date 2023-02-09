import { Link } from "react-router-dom"
export default function Header () {
    return (
        <nav className="dash-header navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="/">سامانه ثبت تیکت</a>
                    <div className="profile">
                        <span>داشبورد</span>
                        <img className="img-thumbnail" />
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">بازگشت</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}