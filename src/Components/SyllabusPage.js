import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import Papa from "papaparse";

const csvFilePath = "/files/syllabus_list.csv";
const toDownload = true;

const SyllabusPage = () => {

    const param = useParams();
    const sid = param["sid"];

    const [data, setData] = useState([]);

    let info = {};

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
    }, [])

    if(data[0] !== undefined){
        for(let count = 0; count < data.length; count++){
            if(data[count]["id"] === sid){
                info = data[count];
                break;
            }
        }    
    }

    return(
        <>
            {console.log(info)}
            <br />
            <div className="pages-block row white-text">
                <div className="">
                    <div className="row" style={{paddingLeft: "5%", paddingTop: "0%"}}>
                        <div className="col s12" style={{paddingTop: "3%"}}>
                            <span style={{textDecoration: "underline", fontSize: "32px", fontWeight: "500"}}>
                                {info.title}
                            </span>
                        </div>
                        <div className="row" style={{fontSize: "18px", paddingLeft: "2%", paddingTop: "8%"}}> 
                            • Speaker:
                        </div>
                        <span className='row' style={{fontStyle: "italic",fontSize: "16px",paddingLeft: "4%"}}> 
                            {info.speaker}
                        </span>
                        <div className="row" style={{fontSize: "18px", paddingLeft: "2%", paddingTop: "2%"}}> 
                            • Time and Location:
                        </div>
                        <span className='row' style={{fontStyle: "italic", fontSize: "16px",paddingLeft: "4%"}}> 
                            {info.date} {info.time} @ {info.location}
                        </span>
                        <div className='row' style={{fontSize: "18px", paddingLeft: "2%", paddingTop: "2%"}}>
                            • Abstract:  
                        </div>
                        <p className='row' style={{fontSize: "18px", paddingLeft: "2%", paddingRight: "5%", width: "95%"}}>
                            {info.abstract}
                        </p>

                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SyllabusPage;