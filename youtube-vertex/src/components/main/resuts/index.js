import React, { useState, useEffect} from 'react';


import fetchSearch from '../../../functions/fetchSearch';




const Results = (props) => {


    const [data, setData] = useState([]);




    useEffect(() => {

        if(props.inputValueAdd) {

            fetchSearch(props.inputValueAdd).then(response => {setData(response || 'No data')})

        }

    }, [props.inputValueAdd])
    




    if(data.length) {return (

        <>

            <span>dados recebidos</span>
        
        </>        

    );}

};


export default Results;