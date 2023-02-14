import { useLazyQuery, useQuery } from "@apollo/client"
import { getCats, getNews } from "../../utils/queries"
import News from "../../components/News";
import styles from '../../styles/newsarchive.module.scss';
import { useState, useEffect } from 'react';

export default function NewsArchive() { 
    const [category, setCategory] = useState('all');
    const { data } = useQuery(getCats);
    const cats = data?.getCats;

    return (
        <div className={`${styles.newsarchive} container`}>
            <div className="row row-reverse">
                <div className="col-md-9">
                    <div className="news">
                        <News category={category} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="filter">
                        <ul>
                            <li onClick={() => setCategory('all')}><i className="bi bi-folder2-open"></i>همه</li>
                            {
                                cats?.map( category => <li key={category.id} onClick={() => setCategory(category.name)} ><i className="bi bi-folder2-open" ></i>{category.name}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}