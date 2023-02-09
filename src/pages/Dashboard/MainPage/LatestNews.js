import { useQuery } from "@apollo/client";
import { useMutation } from '@apollo/client';
import { changeNewsStyle, createNews, getNews } from "../../../utils/queries";
import { useEffect, useState } from "react";
import styles from '../../../styles/dashboard/mainpage.module.scss';
import News from "../../../components/News";
import NewsForm from "../../../components/NewsForm";

export default function LatestNews() {
    const latestNews = useQuery(getNews);
    const defaultValue = { title: "", content: "", image : "", category: ""};
    const [ newNews, setNewNews ] = useState(defaultValue);
    const [ data, setData ] = useState([]);
    const [ file, setFile ] = useState(null);
    const [ columnType, setColumnType ] = useState(null);
    const [ changeStyle, changedStyle ] = useMutation(changeNewsStyle);
    const [ create, news ] = useMutation(createNews);
    console.log(newNews)
    useEffect(() => {
        if(latestNews.data?.getNews) {
            setColumnType(latestNews.data.getNews.columnType)
        }
    }, [latestNews])

    const handleChangeStyle = () => {
        changeStyle({
            variables : { columnType }
        })
    }

    const handleClick = () => {
        data.forEach(item => {
            const { image, title, content, category } = item
            create({
                variables : { title, content, image, category }
            })
        })
        setNewNews(defaultValue);
        setData([])
    }

    return (
        <div className={styles.mainpage}>
            <div className="my-3">
                <h6>نحوه نمایش اخبار : </h6>
                <div className="d-flex flex-row row-wrap column-type ">
                    <button className={`btn btn-outline-primary ${columnType === 'col-md-4' ? 'active'  : ""} `} onClick={() => setColumnType('col-md-4')} ><i className="bi bi-layout-three-columns"></i></button>
                    <button className={`btn btn-outline-primary ${columnType === 'col-md-6' ? 'active'  : ""} `}  onClick={() => setColumnType('col-md-6')}><i className="bi bi-layout-split"></i></button>
                </div>
                <button className="w-100 btn btn-sm btn-outline-success" onClick={handleChangeStyle}>ثبت</button>
            </div>
            <div className="latestnews">
                <div className="createNews">
                    <h6>خبر جدید: </h6>
                    <NewsForm data={data} setData={setData}  file={file} setFile={setFile} newNews={newNews} setNewNews={setNewNews}/>
                    <News previewData={[...data]} columnType={columnType} />
                    <button className="btn btn-sm btn-outline-success my-3 w-100" onClick={handleClick}>ثبت</button>
                </div>
            </div>
        </div>
    )
}