import { useState } from "react"
export default function ListItem({item}) {
    const [show, setShow] = useState(false)
    return (
        <li>
            <div className="item d-flex align-items-center" onClick={(e) => setShow(!show)}>
                <span className="toggleicon ms-3">
                    {
                        show ?
                        <i className="bi bi-caret-down-fill"></i>
                        :
                        <i className="bi bi-caret-left-fill"></i>
                    }
                </span>
                <h6 className="title m-0">{item.title}</h6>
            </div>
            <div className={`dropdown ${show ? 'show' : ''} `}>
                <h6>{item.header}</h6>
                <p>{item.body}</p>
            </div>
        </li>
    )
}