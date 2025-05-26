import React, { useState } from 'react'

const FoodMenu = () => {
    const [foodmenu, setfoodmenu] = useState([])
    const [inputValue, setinputValue] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        if(inputValue.trim()){
            setfoodmenu([...foodmenu, inputValue])
            setinputValue('')
        }
    }
    const changeMenu = (event) => {
        setinputValue(event.target.value)
    }


  return (
    <div>
        <div className="row">
            <div className="col-lg-5 m-auto">
                <div className="foodmenu-wrap">
                    <h1>Add Your Favorite Item</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='input your value' value={inputValue} onChange={changeMenu} />
                        <button type='submit'>add</button>
                    </form>
                    <ul>
                        {foodmenu.map((foodItems, FoodId) =>  {
                            return( 
                            <li key={FoodId}>{foodItems}</li>
                        )
                        
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default FoodMenu