import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLink, deleteLink } from '../../store/actionTypes';
import LinkItem from '../../components/Linkitem';


import styles from '../../styles/dashboard/headers.module.scss';

export default function SiteHeader() {
    const [drop, setDrop] = useState(false);
    const [newChild, setNewchild] = useState({childtitle: "", childurl: "", onEdit: false})
    const [ link, setLink ] = useState({url: "", title: "", children : []})
    const { title, url, children} = link
    const { links : headerLinks } = useSelector(state => state.siteHeader);
    const [links, setLinks] = useState(headerLinks);
    const dispatch = useDispatch()

    const createLink = (dropdown) => {
        return (
            <>
                <div className="form-group">
                    <label>عنوان {dropdown ? "فرزند" : "لینک"}</label>
                    <input onChange={(e) => handleChange(e, dropdown)} type="text" className="form-control form-control-sm w-50" name={`${dropdown ? 'child': ""}title`}/>
                </div>
                <div className="form-group">
                    <label className={drop && !dropdown ? 'text-muted' : ''}>آدرس {dropdown ? "فرزند" : "لینک"}</label>
                    <input onChange={(e) => handleChange(e, dropdown)} type="text" disabled={drop && !dropdown} className="form-control form-control-sm" name={`${dropdown ? 'child': ""}url`}/>
                </div>
            </>
        )
    }

    useEffect(() => {
        setLinks(headerLinks)
    }, [headerLinks])

    const handleChange = (e, dropdown) => {
        if(!dropdown) {
            setLink({ ...link, [e.target.name] : e.target.value})
        } else {
            setNewchild({ ...newChild, [e.target.name] : e.target.value})
        }
    }
    
    
    return (
        <div className="container p-3">
            <div className="d-flex flex-column">
                <h2>لینک های هدر: </h2>
                {
                    links?.map((link,index) => <LinkItem key={index} link={link} index={index}/>)
                }
                <h5>اضافه کردن لینک جدید:</h5>
                <div className={styles.headerLinks} >
                    <div className="form-group d-flex align-items-center"> 
                        <label htmlFor="dropdowncheck mx-2">لینک کشویی</label>
                        <input type="checkbox" className="from-checkbox" id="dropdowncheck" value={drop} onChange={(e) => setDrop(e.target.checked)}/>
                    </div>
                    {
                        createLink(false)
                    }
                    {
                        drop && 
                        <div className="p-3 my-4" style={{border: "1px solid #ddd", borderRadius: "3px"}}>
                            <h6>افزودن فرزند : </h6>
                            {
                                createLink(true)
                            }
                            <button onClick={() => {if(newChild.childtitle !== "" && newChild.childurl !== ""){
                                setLink({...link, children : [...link.children, newChild]})
                            }}} className="w-100 btn btn-sm btn-primary my-2">
                                افزودن فرزند
                            </button>
                            {
                                <>
                                    <h6>فرزندان: </h6>
                                    {
                                        link.children.map((child, index) => (
                                            <div className="d-flex" key={index}>
                                                <span>1- عنوان: {child.childtitle} - آدرس : ({child.childurl}) </span>
                                            </div>
                                        ))
                                    }
                                </>
                            }
                        </div>
                    }
                    <button className="btn btn-outline-success w-100 my-3" onClick={() => dispatch(addLink(title, url, links, children))}>افزودن</button>
                </div>
            </div>
        </div>
    )
}