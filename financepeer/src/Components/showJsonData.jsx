import React from 'react';
import './showJsonData.css';

function showJsonData(props){
    return(
        props.jsonData.map((data)=>{
            return(
                <div className="jsondata">
                    <div>{data.userId}</div>
                    <div>{data.id}</div>
                    <div>{data.title}</div>
                    <div>{data.body}</div>
                </div>
            )            
        })
    );
}

export default showJsonData;