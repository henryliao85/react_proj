import { useState, useEffect } from "react";
import Papa from "papaparse";
import NameCard from "./NameCard";

const CardType = (props) => {
    
    const csvFilePath = props.url;
    const toDownload = props.toDownload;
    const baseUrl = props.baseUrl;
    const defaultImg = props.defaultImg;

    const [data, setData] = useState([]);

    const parseFile = (file) => {
        Papa.parse(file,{
                download: toDownload,
                header: true,
                complete: results => {
                    setData(results.data);
                }
            });
    }

    useEffect( () => {
        if(toDownload===true){
            parseFile(csvFilePath)           
        }
        if(toDownload===false){
            fetch(csvFilePath)
            .then(res => res.text())
            .then(resText => parseFile(resText))
        }
    })

    const list = []

    if(data !== undefined){
        data.forEach((temp) => {
            list.push(
                <div key={temp["eng_name"]}>
                    <NameCard
                        name={temp["name"]}
                        surname={temp["surname"]}
                        engName={temp["eng_name"]}
                        engSurname={temp["eng_surname"]}
                        title={temp["title"]}
                        field1={temp["field1"]}
                        field2={temp["field2"]}
                        field3={temp["field3"]}
                        email1={temp["email1"]}
                        email2={temp["email2"]}
                        email3={temp["email3"]}
                        cv={temp["cv_ref"]}
                        site={temp["site"]}
                        photo={temp["photo"]}
                        baseUrl={baseUrl}
                        defaultImg={defaultImg}
                    />
                </div>
            );
        });
    }

    return(
        <>
            <h4 className="title_style"> Card Type </h4>
            {list}
        </>
    )
}

export default CardType;