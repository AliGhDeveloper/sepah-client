import { useQuery } from "@apollo/client"
import { getCats, getNews } from "../../utils/queries"
import News from "../../components/News";
import styles from '../../styles/newsarchive.module.scss';

export default function NewsArchive() { 
    const { data } = useQuery(getCats);
    const cats = data?.getCats;
    
    return (
        <div className="container my-5">
            <div className="row row-reverse">
                <div className="col-md-7">
                    <News />
                </div>
                <div className="col-md-5">
                    <div className="filter">
                        <ul>
                            <li><i className="bi bi-folder2-open"></i>همه</li>
                            {
                                cats?.map( category => <li key={category.id}><i className="bi bi-folder2-open"></i>{category.name}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}