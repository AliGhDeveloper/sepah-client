import Slider from "../components/Slider"
import { useEffect, useState } from "react"
import News from "../components/News";
import CDecription from '../components/CDescription';
import { Link } from "react-router-dom";
export default function Home() {
    String.prototype.toPersianDigits= function(){
        var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
        return this.replace(/[0-9]/g, function(w){
            return id[+w]
        });
    }
    const foundyear = 1346
    const sabeqe = (foundyear) => {
        const date = new Date().toLocaleDateString('fa-IR-u-nu-latn').split('/');
        const year = Number(date[0])
        let sabeqe = year - foundyear;
        return `${sabeqe}`.toPersianDigits()
    }
    
    

    const [views, setViews] = useState(null);
    useEffect(() => {
        fetch('https://api.countapi.xyz/update/sepahsite/lkdjfslkjeljfdkjslkefjlksjldkjf?amount=1')
            .then(response => response.json())
            .then(result => setViews(result.value))
    },[])
    return (
        <>
        <Slider />
        <video src="/media/videocover.mp4" autoPlay muted  loop id="videocover" />
        <div className="mpcontent container p-4">
            <News />
            <Link to="/newsarchive">بیشتر در آرشیو اخبار و مقالات ...</Link>
            <hr />
            <CDecription />
            <div className="d-flex justify-content-around">
                <div className="yearcounter d-flex flex-column text-center">
                    <span>تاسیس در سال {foundyear.toString().toPersianDigits()}</span>
                    با بیش از {sabeqe(foundyear)} سال سابقه
                </div>
                <div className="viewscounter d-flex flex-column text-center">
                    <span>{views}</span>
                    <span>میزان بازدید از سایت</span>
                </div>
            </div>
        </div>
        </>
    )
}