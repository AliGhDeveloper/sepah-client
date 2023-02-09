import { useCallback, useEffect, useRef } from 'react';

export default function NewsItem({ news, columnType }) {
    console.log(news)
    const {title, preview, image, content, category, date, views } = news
    const myContent = useRef();
    

    // const myContent2 = useCallback(node => {
    //     if (node !== null) {
    //         console.log(node)
    //         console.log(node.getBoundingClientRect().height);
    //         console.log(node.getBoundingClientRect().width);
    //     }
    // }, []);

    useEffect(() => {
        myContent.current.innerHTML = content
    }, [content])
    return (
        <div className={`col-12 p-2 ${columnType}`}>
            <div className="card" >
                <img src={ image ? image : preview } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div ref={myContent} id="mydiv">
                    </div>
                    <div className="d-flex options" >
                        <span><i className="bi bi-calendar3"></i>{date}  </span>
                        <span><i className="bi bi-folder2-open"></i>{category} </span>
                        <span><i className="bi bi-eye"></i>{views}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}