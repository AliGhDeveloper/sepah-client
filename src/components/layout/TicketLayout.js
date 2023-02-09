import { Outlet } from "react-router-dom"
import Header from "./TicketHeader"
import styles from '../../styles/ticket.module.scss'
export default function Layout () {
    return (
        <div className={styles.layout}>
            <Header />
            <div className="container-md p-2">
                <div className="row gx-5">
                    <div className="col-md-3">
                        <ul className="list-group">
                            <li className="list-group-item header"><i className="bi bi-funnel-fill mx-2"></i>نمایش</li>
                            <li className="list-group-item">تمامی درخواست ها</li>
                            <li className="list-group-item">درخواست های باز</li>
                            <li className="list-group-item">درخواست های آرشیو</li>
                        </ul>

                        <ul className="list-group">
                            <li className="list-group-item header"><i className="bi bi-funnel-fill mx-2"></i>موضوعات</li>
                            <li className="list-group-item">تمامی موضوعات</li>
                            <li className="list-group-item">T-سامانه جامع کارگزاری (TBS)</li>
                            <li className="list-group-item">T-آنلاین</li>
                            <li className="list-group-item">تفیرات IP</li>
                            <li className="list-group-item">آنلاین گروهی (Tivan)</li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}