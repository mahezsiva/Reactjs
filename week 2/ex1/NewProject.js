

import React, { useState } from 'react'

export default function NewProject() {
   
    
const date=new Date();
    return (
        <div className="txt">
            <h1>username :Mahesh kumar</h1>
            <div className="res">
                 <h1>{date.toString()}</h1>
            </div>
           
        </div>
    )
}
