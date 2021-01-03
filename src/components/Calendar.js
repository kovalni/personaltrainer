import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import TextField from '@material-ui/core/TextField';


export default function Calendar() {
    //name, how to modify
    const [trainings, setTrainings] = React.useState([ ]);

    React.useEffect (() => fetchData(), []);

    const fetchData = () => {
        fetch ('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const columns = [
        {
            filterable: false,
            width: 120,
            Cell: row =>   <TextField
                id="time"
                type="time"
                defaultValue="00:00"
          />
        },
        {
            filterable: false,
            Header: 'Monday',
        },
        {
            filterable: false,
            Header: 'Tuesday',
        },
        {
            filterable: false,
            Header: 'Wednesday',
        },
        {
            filterable: false,
            Header: 'Tuesday',
        },
        {
            filterable: false,
            Header: 'Friday',
        },
        {
            filterable: false,
            Header: 'Saturday',
        },
        {
            filterable: false,
            Header: 'Sunday',
        },
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );    
}