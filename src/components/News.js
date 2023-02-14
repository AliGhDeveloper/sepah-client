import { useEffect, useRef, useState } from "react"
import { useLazyQuery } from "@apollo/client"
import { getNews } from "../utils/queries";
import styles from '../styles/news.module.scss';
import NewsItem from "./NewsItem";
import { useLocation } from 'react-router-dom';


export default function News({ previewData, columnType, category }) {
    const [ getData, data ] = useLazyQuery(getNews, {
        variables : { category }
    });

    const location = useLocation();

    const [ columns, setColumns ] = useState(null)
    const [ newsData, setNewsData] = useState(null);
    
    useEffect(() => {
        getData()
    }, [category])

    useEffect(() => {
        if(data.data !== undefined) {
            setNewsData(data.data?.getNews.data)
            setColumns(data.data?.getNews.columnType)
        } else if(previewData !== undefined){
            if(columnType !== undefined) {
                setColumns(columnType)
            }
            setNewsData(previewData)
        }
    }, [data, previewData, columnType])

    useEffect(() => {
        if(previewData === undefined) {
            getData();
        }    
    }, []);


    return (
        <div className={`${styles.news} row row-wrap`}>
            {
                !location.pathname.includes('newsarchive') &&
                <h5>
                    {
                        previewData !== undefined ? 
                        "پیش نمایش : "
                        :
                        "آخرین اخبار : "
                    }
                </h5>
            }
            {   
                newsData?.loading ? 
                <p>در حال بارگذاری...</p> : 
                newsData?.length < 1 ? <p>چیزی برای پیش نمایش وجود ندارد!</p> :
                newsData?.map((news, index) => (<NewsItem key={index} news={news} columnType={columns}/>))
            }
        </div>
    )
}