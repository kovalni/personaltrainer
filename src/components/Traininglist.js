import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

export default function Traininglist() {
    //name, how to modify
    const [trainings, setTrainings] = useState([ ]);

    useEffect (() => fetchData(), []);

    const fetchData = () => {
        fetch ('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );    
}