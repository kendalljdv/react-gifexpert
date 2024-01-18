import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Your Name']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    };



    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />


            {/* Listado de Gif */}



            {
            categories.map((category) => (
                <GifGrid key={category}
                    category={category}
                />
            ))}

            {/* Gif Item */}



        </>
    )
}

