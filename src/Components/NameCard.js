const NameCard = (props) => {
    const {name,surname,engName,engSurname,title,field1,field2,field3,email1,email2,email3,cv,site,photo,baseUrl,defaultImg} = props;

    return(
        <>
            {
                name===undefined || name === "" || surname===undefined || surname === ""?
                    engName===undefined || engName === "" || engSurname===undefined || engSurname === ""?
                        <></>
                        :
                        <div className="col s12 m6">
                            <div className="card horizontal small grey darken-2">
                                <div className="card-image">
                                {
                                    cv===undefined || cv===""?
                                        photo===undefined || photo===""?
                                            <img src={defaultImg} alt="" className="card_image" />
                                            :
                                            <img src={baseUrl+photo} alt="" className="card_image" />
                                        :
                                        photo===undefined || photo===""?
                                            <a href={cv} target="_blank" rel="noopener noreferrer">
                                                <img src={defaultImg} alt="" className="card_image" />
                                            </a>
                                            :
                                            <a href={cv} target="_blank" rel="noopener noreferrer">
                                                <img src={baseUrl+photo} alt="" className="card_image" />
                                            </a>
                                }
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <span className="grey-text text-lighten-5" style={{"fontSize": "22px", "fontWeight": "500"}}>
                                            {engName} {engSurname}
                                        </span>
                                        {
                                            title===undefined || title===""?
                                                <></> : 
                                                <p className="grey-text text-lighten-4" style={{"fontStyle": "italic", "fontSize": "14px"}}>
                                                    {title}
                                                </p>
                                        }
                                        {
                                            (field1===undefined || field1==="") && (field2===undefined || field2==="") && (field3===undefined || field3==="")?
                                                <></>
                                                :
                                                <p className="grey-text text-lighten-1" style={{"paddingTop": "0.4rem", "fontSize": "14px"}}>
                                                    Fields:
                                                </p>
                                        }
                                        {
                                            field1===undefined || field1===""?
                                                <></> : 
                                                <p className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                    {field1}
                                                </p>
                                        }
                                        {
                                            field2===undefined || field2===""?
                                                <></> : 
                                                <p className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                    {field2}
                                                </p>
                                        }
                                        {
                                            field3===undefined || field3===""?
                                                <></> : 
                                                <p className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                    {field3}
                                                </p>
                                        }
                                        {
                                            (email1===undefined || email1==="") && (email2===undefined || email2==="") && (email3===undefined || email3==="") ?
                                                <></>
                                                :
                                                <p className="grey-text text-lighten-1" style={{"paddingTop": "0.4rem", "fontSize": "14px"}}>
                                                    Email:
                                                </p>
                                        }
                                        {
                                            email1===undefined || email1==="" ?
                                                <></>:
                                                <span className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                    {email1}
                                                </span>
                                        }
                                        {
                                            email2===undefined || email2==="" ?
                                                <></>:
                                                <span className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                    {email2}
                                                </span>
                                        }
                                        {
                                            email3===undefined || email3==="" ?
                                                <></>:
                                                <span className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                    {email3}
                                                </span>
                                        }
                                        </div>
                                        {
                                            site===undefined || site===""?
                                                <></>:
                                                <div className="card-action" id="title-text">
                                                    <a href={site} id="card-cv" target="_blank" rel="noopener noreferrer">
                                                        Site
                                                    </a>
                                                </div>
                                        }
                                </div>
                            </div>
                        </div>
                    :
                    <div className="col s12 m6">
                        <div className="card horizontal small grey darken-2">
                            <div className="card-image">
                            {
                                cv===undefined || cv===""?
                                    photo===undefined || photo===""?
                                        <img src={defaultImg} alt="" className="card_image" />
                                        :
                                        <img src={baseUrl+photo} alt="" className="card_image" />
                                    :
                                    photo===undefined || photo===""?
                                        <a href={cv} target="_blank" rel="noopener noreferrer">
                                            <img src={defaultImg} alt="" className="card_image" />
                                        </a>
                                        :
                                        <a href={cv} target="_blank" rel="noopener noreferrer">
                                            <img src={baseUrl+photo} alt="" className="card_image" />
                                        </a>
                            }
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <span className="grey-text text-lighten-5" style={{"fontSize": "22px", "fontWeight": "1000"}}>
                                        {surname} {name} 
                                    </span>
                                    <span>  </span>
                                    {
                                        engName===undefined || engName==="" || engSurname===undefined || engSurname===""?
                                            <></> : 
                                            <span className="grey-text text-lighten-5" style={{"fontSize": "14px", "fontWeight": "500"}}>
                                                {engName} {engSurname}
                                            </span>
                                    }
                                    {
                                        title===undefined || title===""?
                                            <></> : 
                                            <p className="grey-text text-lighten-4" style={{"fontStyle": "italic", "fontSize": "14px"}}>
                                                {title}
                                            </p>
                                    }
                                    {
                                        (field1===undefined || field1==="") && (field2===undefined || field2==="") && (field3===undefined || field3==="")?
                                            <></>
                                            :
                                            <p className="grey-text text-lighten-1" style={{"paddingTop": "0.4rem", "fontSize": "14px"}}>
                                                Fields:
                                            </p>
                                    }
                                    {
                                        field1===undefined || field1===""?
                                            <></> : 
                                            <p className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                {field1}
                                            </p>
                                    }
                                    {
                                        field2===undefined || field2===""?
                                            <></> : 
                                            <p className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                {field2}
                                            </p>
                                    }
                                    {
                                        field3===undefined || field3===""?
                                            <></> : 
                                            <p className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                {field3}
                                            </p>
                                    }
                                    {
                                        (email1===undefined || email1==="") && (email2===undefined || email2==="") && (email3===undefined || email3==="") ?
                                            <></>
                                            :
                                            <p className="grey-text text-lighten-1" style={{"paddingTop": "0.4rem", "fontSize": "14px"}}>
                                                Email:
                                            </p>
                                    }
                                    {
                                        email1===undefined || email1==="" ?
                                            <></>:
                                            <span className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                {email1}
                                            </span>
                                    }
                                    {
                                        email2===undefined || email2==="" ?
                                            <></>:
                                            <span className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                {email2}
                                            </span>
                                    }
                                    {
                                        email3===undefined || email3==="" ?
                                            <></>:
                                            <span className="grey-text text-lighten-1" style={{"fontStyle": "italic", "fontSize": "12px"}}>
                                                {email3}
                                            </span>
                                    }
                                </div>
                                {
                                    site===undefined || site===""?
                                        <></>:
                                        <div className="card-action" id="title-text">
                                            <a href={site} id="card-cv" target="_blank" rel="noopener noreferrer">
                                                Site
                                            </a>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default NameCard;