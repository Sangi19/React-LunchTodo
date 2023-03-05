import React from 'react'

export default function AddLunchItem() {
  return (
    <div>
        <div>
        <input 
            id="lunchName"
            type="text" 
            placeholder='lunch Name' 
            value={lname}
            onChange={(e)=> setName(e.target.value)}
            />
        <input 
            id="ing1"
            type="text" 
            placeholder='ingredient 1' 
            />
        <input 
            id="ing2"
            type="text" 
            placeholder='ingredien 2' 
            />
        <button type="button" className="btn btn-dark">Add Button</button>    
        </div>
    </div>
  )
}
