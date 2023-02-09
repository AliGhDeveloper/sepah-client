import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/js/plugins/align.min.js'
import 'froala-editor/js/plugins/colors.min.js'
import 'froala-editor/css/plugins/colors.min.css'
import 'froala-editor/js/plugins/font_size.min.js'
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/css/plugins/image.min.css';


export default function Froala({model, onModelChange}) {
    const myconfig = {
        imageUploadURL : "http://localhost:4000/image_upload"
    }
    return (
        <FroalaEditor model={model} config={myconfig} imageUploadURL="http://localhost:4000" onModelChange={(mod) => {
            return onModelChange(mod)
        }}/>
    )
}