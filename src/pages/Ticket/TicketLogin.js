import styles from '../../styles/ticket.module.scss';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <div className={`container ${styles.login}`}>
            <div className="d-flex justify-content-end">
                <button className="btn btn-sm btn-primary">بازگشت</button>
            </div>
            <div className="row my-5">
                <div className={`col-md-8 col-10 mx-auto bordered-box `} >
                    <div className={`row ${styles.mrow}`}>
                        <div className="col-md-6 col-12 p-4">
                            <div className="form-group">
                                <label htmlFor="username">نام کاربری</label>
                                <input type="text" className="my-2 form-control form-control" name="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">رمز عبور</label>
                                <input type="text" className="my-2 form-control form-control" name="username" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <Link>ثبت نام</Link>
                                <Link>بازیابی رمز عبور</Link>
                            </div>
                        </div>
                        <div className={`col-md-6 col-12 p-0 ${styles.image}`}>
                            <img src='/media/tiger.jpg' className="w-100 h-100"  />
                            <span className="d-flex justify-content-center align-items-center">
                                <h6 className="heading">به پورتال مشتریان خوش آمدید</h6>
                            </span>
                            <div className="d-flex justify-content-between">
                                <span>پشتیبانی: 44444444</span>
                                <span>آدرس سایت : www.example.com</span>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}