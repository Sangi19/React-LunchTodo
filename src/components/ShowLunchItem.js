import React from 'react'

export default function ShowLunchItem(props) {
  return (
    <div>        

            <li className="list-group-item list-group-item">   
                <div className="d-flex mb-3 justify-content-around">
                    <div>{props.dish}</div>
                    <div>{props.ingredient1}</div>
                    <div>{props.ingredient2}</div>
                    <div>
                        <button type="button" className="btn btn-secondary">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </li> 

    </div>
  )
}
