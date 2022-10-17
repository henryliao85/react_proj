import { useState, useEffect } from "react";
import Papa from "papaparse";
import SyllabusList from "./SyllabusList";

const SyllabusBlock = (props) => {

    const {csvFilePath, toDownload} = props;

    const [data, setData] = useState([]);

    const syllabusList = [];

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
        parseFile(csvFilePath)
    })

    if(data[0] !== undefined){
        for(let count = 0; count < 7; count++){
            const temp = data[count]
            
            if(temp["id"] !== undefined && temp["id"] !== ""){
                syllabusList.push(
                    <div key={temp["id"]}>
                        <SyllabusList
                            sid={temp["id"]}
                            title={temp["title"]}
                            date={temp["date"]}
                            time={temp["time"]}
                            location={temp["location"]}
                            speaker={temp["speaker"]}
                            affiliation={temp["affiliation"]}
                            abstract={temp["abstract"]}
                        />
                    </div>
                );    
            }
        }    
    }

    return(
        <>
            <div className='collection home_list'>
                {syllabusList}
            </div>
        </>
    )
}

export default SyllabusBlock;