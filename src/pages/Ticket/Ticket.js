import styles from '../../styles/ticket.module.scss';
export default function Ticket () {
    
    return (
        <div className="my-3">
            <h1>لیست تیکت ها</h1>
            <hr />
            <div className={styles.ticketlist}>
                <div className="d-flex justify-content-between text-white">
                    <span>نمایش {} تا از {} تا</span>
                    <input type="text" name="search" placeholder="جست و جو ..." className="form-control form-control-sm" />
                </div>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>شماره پیگیری</th>
                            <th>نام درخواست<i className="bi bi-arrow-down-up"></i></th>
                            <th>وضعیت<i className="bi bi-arrow-down-up"></i></th>
                            <th>تاریخ ایجاد<i className="bi bi-arrow-down-up"></i></th>
                            <th>ایجاد کننده</th>
                            <th>تاریخ حل<i className="bi bi-arrow-down-up"></i></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}