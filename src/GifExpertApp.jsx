import { useState } from "react";
//archivo de barril
import { AddCategory, GifGrid } from "./components"; 


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [ ...cat, 'Valorant' ])
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category} />
            ))}

        </>
    )
}

