import styles from '../styles/description.module.scss';
export default function Desc () {
    return (
        <div className={` d-flex flex-column ${styles.description}`}>
            <div className="body">
                <h4>شرکت کارگزاری بانک سپه</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet, metus accumsan pharetra viverra, orci nunc semper purus, eget semper nulla nisi at nunc. Integer leo risus, lacinia tristique viverra non, scelerisque sagittis est. Aenean sit amet lacinia erat, sed mollis leo. Nunc tempus nunc orci, in volutpat lorem sodales in. Fusce tristique faucibus purus non blandit. Donec dapibus lobortis dolor pharetra consectetur. Nam volutpat faucibus erat, sed suscipit nisi varius ac. Vestibulum placerat ex nibh, eu bibendum mi tincidunt a. Nulla dolor lectus, feugiat interdum vehicula nec, pellentesque nec metus. Praesent in tincidunt risus, id pretium orci. Quisque id urna quis massa vulputate tincidunt. Cras sollicitudin nulla eget risus semper scelerisque.
            </div>
            <img src="/media/tiger.jpg" alt="کارگزاری بانک سپه" />
        </div>
    )
}