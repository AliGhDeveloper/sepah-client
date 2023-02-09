import { useEffect, useState } from "react";
import Froala from '../components/Froala';
import FileBase from 'react-file-base64';

export default function NewsForm({ data, setData, file, setFile, newNews, setNewNews }) {
    const [preview, setPreview ] = useState(null);
    const {title, content, image} = newNews;

    useEffect(() => {
        if(file) {
            setNewNews({...newNews, image : file})
            setPreview(file)
        }
    }, [ file ]);

    const handleChange = (e) => {
        setNewNews({...newNews, [e.target.name] : e.target.value})
    }
    
    const handelmodlechange = (model) => {
        setNewNews({ ...newNews, content : model})
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="titleinp">عنوان :</label>
                <input value={title} onChange={(e) => handleChange(e)} name="title" id="titleinp" className="form-control form-control-sm" /> 
            </div>
            <div className="form-group">
                <label htmlFor="contentinp">متن خبر : </label>
                <Froala  model={content} onModelChange={handelmodlechange}/>
            </div>
            <div className="form-group">
                <label htmlFor="category">دسته بندی : </label>
                <select name="category" id="category" className="form-select" onChange={handleChange}>
                    <option value="همه">همه</option>
                    <option value="اخبار روز">اخبار روز</option>
                    <option value="مقالات آموزشی">مقالات آموزشی</option>
                    <option value="گزارشات هفتگی">گزارشات هفتگی</option>
                    <option value="گزارشات روزانه">گزارشات روزانه</option>
                    <option value="اخبار فوری">اخبار فوری</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="imageinp" className="d-block">تصویر خبر : </label>
                {/* <input onChange={(e) => setFile(e.target.files[0])} name="image" id="imageinp" type="file"  className="form-control form-control-sm" /> */}
                <FileBase  type="file" multiple={false} onDone={(obj) => setFile(obj.base64)}/>
            </div>
            <button className="btn btn-sm btn-primary my-3 w-100" onClick={(e) => {
                e.preventDefault();
                if( !title || !content || !image ) {
                    return console.log('please add all fields!')
                }
                return setData([...data, {...newNews, preview, date : new Date().toLocaleDateString('fa-IR'), views : 0}])
            }}>افزودن</button>
        </form>
    )
}