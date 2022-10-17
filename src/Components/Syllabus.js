import SyllabusBlock from "./SyllabusBlock";

const Syllabus = (props) => {

    const {baseUrl, toDownload} = props;
    
    return(
        <>
            <div className="row" style={{ position: "relative"}}>
                <div className="col s12">
                    <h4 className="home_title"> Syllabus </h4>
                    <div className='collection home_list'>
                        <SyllabusBlock csvFilePath={baseUrl+"syllabus_list.csv"} toDownload={toDownload} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Syllabus;
