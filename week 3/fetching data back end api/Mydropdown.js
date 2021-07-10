
import React, { useState, useEffect } from 'react'

export default function Mydropdown() {

    const [items, setItems] = useState([]);
    const [limit, setLimit] = useState();

    useEffect(() => {
        fetch('https://60e2e8199103bd0017b47639.mockapi.io/studentsdetails')
            .then((res) => res.json())
            .then((data) =>setItems(data))
          

    },[])

    return (
        <div>
            <div className="app">
                <div className="container">
                    <div className="row m-0">
                        {

                            items.map(items => (
                                <div key={items.id} className="col-3 p-3">
                                    <div className="app">
                                   <p>Id:{items.id}</p>
                                   <p>First name:{items.firstname}</p>
                                   <p>Last name:{items.lastname}</p>

                                   </div>
                                </div>

                            ))
                        }




                    </div>
                </div>

            </div>



        </div>
    )
}
