import { useQuery } from "@apollo/client"
import { getNewsById } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import styles from '../styles/news.module.scss';


export default function NewsDetails() {
    const params = useParams();
    const [ data, setData ] = useState({});
    const { image, id, title, content, views, date } = data
    const news = useQuery(getNewsById, { 
        variables : { id : params.newsid}
    });
    const mybody = useRef();

    useEffect(() => {
        if(mybody && content) {
            mybody.current.innerHTML = content
        }
    }, [mybody, content])

    useEffect(() => {
        if( news.data && news.data.getNewsById ) {
            setData(news.data.getNewsById) 
        }
    }, [news]) 
    
    return (
        <div className={`container ${styles.newsDetails}`} >
            <div className="details d-flex flex-column">
                <img src={image} alt={image} className="image-thumbnail" />
                <h3 className="header">{title}</h3>
                <div className="body" ref={mybody}>
                    
                </div>
                <span className="d-flex justify-content-between options">
                    <span><i className="bi bi-calendar3 ms-2"></i>{date}  </span>
                    <span><i className="bi bi-eye ms-2"></i>{views}</span>
                </span>
            </div>
        </div>
    )
}