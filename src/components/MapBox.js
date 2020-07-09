import React, {useState} from 'react'
import MapGl from "@urbica/react-map-gl"


export const MapBox = () => {
    console.log(process.env)
    const [viewport, setViewport] = useState({
        latitude: 30.3753,
        longitude: 69.3451,       
        zoom: 10
    });
    const token = "pk.eyJ1IjoiYmlsYWxmYXJlZWQiLCJhIjoiY2tjMjlmOWQxMTEyazJ6dXIyd2Z0cnB0OCJ9.8wGp7Rv6U1ZPMqhiOjjD4g"
    return (
        <div style={{ width: '100vw', height: '100vh' }}>          
                <MapGl {...viewport} accessToken={token}
                style={{ width: '100vw', height: '100vh' }}
                onViewportChange={(viewport) => setViewport(viewport)}
                mapStyle="mapbox://styles/bilalfareed/ckcepb6fk15ku1iqxqduo0o5c"                
            >
                {/* Type some text */}
            </MapGl>
            
        </div>
    )
}
