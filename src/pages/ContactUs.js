import styles from '../styles/contactus.module.scss';
import { useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
const map = "/mapfile/iran-with-regions_1457.geojson"


export default function ContactUs() {
    return (
        <div className={`${styles.contactus} container-fluid`}>
            <div className="row">
                <div className="col-md-6 col-12">
                    <h5>شعب مرکزی</h5>
                    <div className="row row-wrap">
                        <div className="col-6">
                            <ul className="banklist">
                                <li>salam</li>
                                <li>salam</li>
                                <li>salam</li>
                                <li>salam</li>
                                <li>salam</li>
                                <li>salam</li>
                                <li>salam</li>
                                <li>salam</li>
                                <li>salam</li>
                                <li>salam</li>
                                <li>salam</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                <ComposableMap >
                    <Geographies geography="/mapfile/iran-with-regions_1457.geojson">
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography key={geo.rsmKey} geography={geo} />
                            ))
                        }
                    </Geographies>
                </ComposableMap>
                </div>
            </div>
        </div>
    )
}