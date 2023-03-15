import data from "../../json-data/logements (1).json"

const ListPage = () =>
{
    return (
        <div>
            {
                data.map(logement => (<div>
                    {
                        logement.title
                    }
                </div>))
            }
        </div>
    )
}

export default ListPage 