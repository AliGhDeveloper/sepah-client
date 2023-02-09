import { Link, Outlet } from "react-router-dom"
import Header from './DashboardHeader';
import styles from '../../styles/dashboard/dashlayout.module.scss';
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';


export default function Layout() {
    const sidebar = useSelector( state => state.sidebar);
    const dispatch = useDispatch();
    return (
        <div className={styles.dashlayout}>
            <Header />
            <div className="row dash h-100">
                <div className={`col-md-4 px-0 mx-0 h-100 p-relative`}>
                    <div className={`sidebar ${sidebar.open ? "show" : ""}`} >
                        <ul className="tools">
                            <li className="profile d-flex align-items-center">
                                <span>داشبورد ادمین</span>
                                <img className="img-thumbnail" />
                            </li>
                            <li>
                                بازگشت
                            </li>
                            <hr />
                        </ul>
                        <ul>
                            <li><Link style={{textDecoration: 'none'}} to="/dashboard/siteheader">هدر سایت</Link></li>
                            <li><Link to="/dashboard/sitefooter">فوتر سایت</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}