import { Link } from "react-router-dom";

const SyllabusList = (props) => {
    const {sid, title, date} = props;

    return(
        <>
            <Link to={`/syllabus/${sid}`} className="row collection-item lists">
                <div className="col s10">
                    <span className="list_title">
                        {title}
                    </span>
                </div>
                <div className="col s2">
                    <span className="list_date">
                        {date}
                    </span>
                </div>
            </Link>
        </>
    )
}

export default SyllabusList;