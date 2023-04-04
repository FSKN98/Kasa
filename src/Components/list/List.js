import { Link } from "react-router-dom";
import data from "../../json-data/logements (1).json";
import "./List.css";

const ListPage = () => {
  return (
    <div className="apartContainer">
      {data.map((logement) => (
        <Link key={logement.id} className="linkToApartement" to={`/fiche-logement/${logement.id}`}>
          <div className="apartContent" style={{backgroundImage: `url(${logement.pictures[0]})`}}>       
            <div className="subtitleContainer">{logement.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );

};

export default ListPage;
