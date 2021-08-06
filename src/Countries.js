import BootstrapTable  from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";
import {useEffect, useState} from "react";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            const resp = await axios.get('https://restcountries.eu/rest/v2/all');
            setCountries(resp.data);
            setLoading(false);
        }

        fetchCountries();
    }, []);

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

    if (loading) return <h2>Loading...</h2>


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
                data={countries}
                columns={columns}
                pagination={paginationFactory()}
                expandRow={expandRow}
            />
        </div>
    );
}