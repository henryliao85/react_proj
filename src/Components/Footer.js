import { useState, useEffect } from "react";
import Papa from "papaparse";

const Footer = () => {
    const csvFilePath = "/files/extra.csv";
    const toDownload = true;

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
            parseFile(csvFilePath);
        }
        if(toDownload===false){
            fetch(csvFilePath)
            .then(res => res.text())
            .then(resText => parseFile(resText))
        }
    })

    return(
        <footer className="min-width page-footer" id="footer-style">
            <div className="container">
                <div className="row">
                    <div className="col s6 container" style={{width:"45%"}}>
                        <h5 className="footer-title">Brief about the website</h5>
                        <p className="">
                            This is an example of a website I wrote.
                        </p>
                    </div>
                    <div className="col s3 offset-l1">
                        <h5 className="footer-title">Contact</h5>
                        <ul>
                            {
                                data[0] ===undefined?
                                <></>
                                :
                                <>
                                    <li>
                                        <div>{data[0]["title"]} {data[0]["eng_name"]} {data[0]["eng_surname"]} ({data[0]["surname"]}{data[0]["name"]})</div> 
                                        {
                                            data[0]["email1"]===undefined?
                                                <></>:<span className="email1">{data[0]["email1"]}</span>
                                        }
                                        {
                                            data[0]["email2"]===undefined?
                                                <></>:<span className="email2">{data[0]["email2"]}</span>
                                        }
                                        {
                                            data[0]["email3"]===undefined?
                                                <></>:<span className="email3">{data[0]["email3"]}</span>
                                        }
                                    </li>
                                    <br />
                                    <li>{data[0]["address"]}</li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright" id="copyright">
                <div className="container">
                {
                    data[0] ===undefined?
                    <>© Example Website</>
                    :
                    <>© {data[0]["year"]} Example Website</>
                }
                </div>
            </div>
        </footer>
    )
}

export default Footer;