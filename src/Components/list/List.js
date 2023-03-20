import { Link } from "react-router-dom";
import data from "../../json-data/logements (1).json";
import "./List.css";

const ListPage = () => {
  return (
    <div className="apartContainer">
      {data.map((logement) => (
        <Link to={`/fiche-logement/${logement.id}`}>
          <div className="apartContent">
            <img src={logement.pictures[0]} className="imgContainer" />
            <div className="subtitle">{logement.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListPage;
