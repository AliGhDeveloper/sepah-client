import { useState } from 'react';
import styles from '../styles/aboutme.module.scss';
import ListItem from '../components/Listitem';

export default function Aboutme() {
    
    const listitems = [
        { title : "درباره ما", header : " سیبنتمسی", body : "بنیتمت سینتبمنت بیمنتبسمن نبتنتیم نتبثهتبی"},
        { title : "کارگزاری", header : " سیبنتمسی", body : "بنیتمت سینتبمنت بیمنتبسمن نبتنتیم نتبثهتبی"}
    ]
    return (
        <div className="container mx-auto text-center">
            <div className={styles.aboutme}>
                <h1>درباره ما</h1>
                <ul className="list">
                    {
                        listitems.map((item,index) => (
                            <ListItem key={index} item={item} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}