const NameList = (props) => {
    const {data} = props

    const list = []

    if(data !== undefined){
        data.forEach((temp) => {
            if(temp["eng_name"]!=="" && temp["eng_name"]!==undefined)
            {
                list.push(
                    <li className="namelist-item row" key={temp["eng_name"]}>
                        <div className="namelist-name col s2" style={{"fontWeight": "500", "fontSize": "18px"}}>
                            <span>{temp["eng_name"]} {temp["eng_surname"]} </span>
                        </div>
                        <div className="namelist-name col s2" style={{"fontWeight": "500", "fontSize": "18px"}}>
                            {
                                temp["name"] === undefined?
                                <></>
                                :
                                <span>
                                    {temp["name"]}
                                </span>
                            }
                        </div>
                        <div className="namelist-email col s3" style={{"fontWeight": "400", "fontSize": "16px"}}>
                            {
                                temp["email1"] === undefined?
                                <></>
                                :
                                <span className="email1">{temp["email1"]}</span>
                            }
                            {
                                temp["email1"] === undefined?
                                <></>
                                :
                                <span className="email2">{temp["email2"]}</span>
                            }
                            {
                                temp["email3"] === undefined?
                                <></>
                                :
                                <span className="email3">{temp["email3"]}</span>
                            }
                        </div>
                    </li>
                );    
            }
        });
    }

    return(
        <>
            <ul className="namelist-table">
                {list}
            </ul>
        </>
    )
}

export default NameList;