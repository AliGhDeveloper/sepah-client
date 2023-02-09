import { Link } from "react-router-dom"
import { useSelector, useDispatch }  from 'react-redux';

export default function Header () {
    const sidebar = useSelector(state => state.sidebar) 
    const dispatch = useDispatch();
    return (
        <nav className="dash-header navbar ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">بانک سپه</a>
                <button className="btn btn-sm menu" title="list" onClick={() => dispatch({ type : 'SIDEBAR', payload : {...sidebar, open : !sidebar.open}})}>
                    <i className="bi bi-list"></i>
                </button>
                <ul className="navbar-nav ">
                    <li className="nav-item d-flex align-items-center">
                        <span>داشبورد ادمین</span>
                        <img className="img-thumbnail" />
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">بازگشت</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}