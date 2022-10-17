import CardType from "../Components/CardType";
import ListType from "../Components/ListType";

const Poster = () => {

    const baseUrl = "./files/";
    const imgBaseUrl = "/pic/";
    const defaultImg="/pic/default.jpg";
    const toDownload = true;

    return(
        <>
            <div className="row cards">
                <CardType url={baseUrl+"/card.csv"} toDownload={toDownload} baseUrl={imgBaseUrl} defaultImg={defaultImg} />
            </div>
            <div className="row cards">
                <ListType url={baseUrl+"/list.csv"} toDownload={toDownload} baseUrl={imgBaseUrl} defaultImg={defaultImg} />
            </div>
        </>    
    )
}

export default Poster;