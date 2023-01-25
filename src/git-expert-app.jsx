import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GitGrid } from "./components/GitGrid"

export const GittExpertApp = () => {
    const [catetgories, setCatetgories] = useState([''])
    
    const addCategory = (newCategory) => {
        if(catetgories.includes(newCategory)) return;
        setCatetgories([newCategory, ...catetgories]);//Operador spread del state == ...'catetgories'
    }

    return(
        <>
            <h1>GittExpertApp</h1>
            <AddCategory //setCatetgories={setCatetgories} 
                onNewCategory={(event) => addCategory(event)}
            />

            {catetgories.map((category) => (
                <GitGrid key={category} category={category}/>
            ))}

               
        </>
    )
}