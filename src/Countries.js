import BootstrapTable  from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import { useQuery } from "react-query";

export default function Countries() {

    const { isLoading, error, data} = useQuery("countries", () =>
        fetch(
            'https://restcountries.eu/rest/v2/all'
        ).then((res) => res.json())
    );

    const columns = [{
        dataField: "name",
        text: 'Country name'
        },
        {
            dataField: "nativeName",
            text: 'Native Name'
        },
        {
            dataField: "capital",
            text: 'Capital'
    }];

    if (isLoading) return <h2>Loading...</h2>

    if (error) return <h2>Error fetching data</h2>

    const expandRow = {
        renderer: row =>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 0.3fr",
                backgroundColor: "#efebeb",
                cursor: "auto"
            }}>
                <div>
                    <ul>
                        <li>Population: {row.population}</li>
                        <li>Area: {row.area} m<sup>2</sup></li>
                        <li>Region: {row.region}</li>
                    </ul>
                </div>
                <div>
                    <img className={"flag"} src={row.flag} alt={"flag"}/>
                </div>
            </div>
    }

    return (
        <div className="Countries">
            <BootstrapTable
                keyField="name"
                data={data}
                columns={columns}
                pagination={paginationFactory()}
                expandRow={expandRow}
            />
        </div>
    );
}