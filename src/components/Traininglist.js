import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Traininglist() {
    //name, how to modify
    const [trainings, setTrainings] = useState([ ]);

    useEffect (() => fetchData(), []);

    const fetchData = () => {
        fetch ('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const deleteTraining = (link) => {
        if(window.confirm('Are you sure you want to delete the training?')){
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date',

        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            sortable: false,
            filterable: false,
            width: 55,
            accessor: 'links.0.href',
            Cell: row => 
            <IconButton aria-label="delete" onClick={() => deleteTraining(row.value)}>
                <DeleteIcon />
                </IconButton>
        },
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );    
}