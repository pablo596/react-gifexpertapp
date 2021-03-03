import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const {data,loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        
        {loading && <p className="animate__animated animate__flash">Loading</p>}

        <div className="card__grid">
            
            {
                data.map(img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                    // <li key={id}>{title}</li>
                ))
            }
        </div>
        </>
    )
}