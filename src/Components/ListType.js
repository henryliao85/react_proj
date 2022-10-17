import { useState, useEffect } from "react";
import Papa from "papaparse";
import NameList from "./NameList";

const ListType = (props) => {

    const csvFilePath = props.url;
    const toDownload = props.toDownload;
    
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

    return(
        <>
            <h4 className="title_style"> List Type </h4>
            {data[0]===undefined? <></> : <NameList data={data} />}
        </>
    )
}

export default ListType;