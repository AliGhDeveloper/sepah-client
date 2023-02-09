import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect }  from 'react';
import {  deleteLink } from '../store/actionTypes';
import styles from '../styles/dashboard/headers.module.scss';


export default function LinkItem ({ link, index, parentLink, children }) {
    const [onEdit, setOnEdit] = useState(false)
    const { links : headerLinks } = useSelector(state => state.siteHeader);
    const [order, setOrder] = useState(null);
    const [links, setLinks] = useState(headerLinks);
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        setLinks(headerLinks)
    }, [headerLinks])

    const handleEdit = (link) => {
        
        let newLinks = links;
        if(order !== null) {
            if(link.children !==undefined) {
                newLinks = links.filter(i => i.title !== link.title && i.url !==link.url);
                newLinks.splice(order, 0, link);
                setOrder(null)
            } else {
                let newchildren;
                newchildren = children.filter(i => i.childtitle !== link.childtitle && i.childurl !==link.childurl)
                newchildren.splice(order, 0, link);
                newLinks = newLinks.map(i => {
                    if(i.title === parentLink.title && i.url === parentLink.url) {
                        return {...parentLink, children : newchildren}
                    } else {
                        return i
                    }
                })
            }
        }
        setOnEdit(!onEdit)
        // newLinks = newLinks.map(i => {
        //     if(i.title === link.title && i.url === link.url) {
        //         return {...link, onEdit : !link.onEdit}
        //     } else {
        //         return {...i, onEdit : false}
        //     }
        // })
        dispatch({ type: 'ADD_LINK', payload: newLinks})
    }

    return (
        <div className={styles.edit}>
            <div className={`link-list d-flex justify-content-between w-100 my-2`}>
            <span className={link.dropdown ? "dropdownlink" : ""} onClick={() => setShow(!show)}>
                <span  >
                    {
                        onEdit ?
                        <input type="number" defaultValue={index + 1} onChange={(e) => setOrder(e.target.value - 1 )} className="form-control form-control-sm d-inline" min="1"/>
                        : 
                        <span>{index + 1}</span>
                    }
                </span>
                - عنوان: {link.title ? link.title : link.childtitle} - آدرس : ({link.url ? link.url : link.childurl})
                {
                    link.dropdown && 
                    <i title={"فرزندان"} className="bi bi-caret-down-fill" ></i>
                }
            </span>
            <div className="my-2">
                <button className="btn btn-sm btn-outline-primary ms-2" onClick={() => handleEdit(link)}>ترتیب</button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(deleteLink(link, links))}>حذف</button>
            </div>
            </div>
            {
                link.children && link.children.length > 0 && 
                <div className={`dropdownmenu ${show ? 'show' : ''}`}>
                    {
                        link.children.map((child,index) => (
                            <LinkItem key={index} index={index} link={child} children={link.children} parentLink={link}/>
                        ))
                    }
                </div>
            }
        </div>
    )
}