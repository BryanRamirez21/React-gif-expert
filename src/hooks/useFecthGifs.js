import React from 'react'
import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/GetGifs";


export const useFecthGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getImgs = async() => {
        const newImgs = await getGifs(category);
        setImages(newImgs);
        setLoading(false);
    }

    useEffect(() => {
        getImgs();
    }, [])

    return {
        images,
        isLoading,
    }
}
