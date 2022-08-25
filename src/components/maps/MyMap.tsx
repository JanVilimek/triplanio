import { GoogleMap, MapType } from '@capacitor/google-maps';
import { airplaneOutline, person, personOutline, planetOutline } from 'ionicons/icons';
import { useRef } from 'react';

const MyMap: React.FC = () => {
  
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap() {
    console.log("map", mapRef, mapRef.current)
    if (!mapRef.current) { console.error("exist");return;}

    newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef.current,
      apiKey: process.env.REACT_APP_YOUR_API_KEY_HERE ?? "AIzaSyCuA1KYVm96YCDaQ74IjLU7rHraJ2cnhWQ",
      config: {
        center: {
          lat: 64,
          lng: -20
        },
        zoom: 8
      }
    })

    console.error(process.env)

    
    //await newMap.setMapType(MapType.Hybrid)

    //await newMap.enableAccessibilityElements(true);
    //await newMap.enableCurrentLocation(true);
    //await newMap.enableTrafficLayer(true);
    
    await newMap.setOnMarkerClickListener((event) => console.error(event));
    //await newMap.destroy();

    await newMap.addMarker(
      {
        
        title:"pipipapi",
        isFlat: true,
        coordinate:{
          lat: 64.25,
          lng: -20,
        },
      }
    );
  }

  if(mapRef.current) createMap();

  return (
    <div className="component-wrapper">
      <capacitor-google-map ref={mapRef} style={{
        position: 'absolute',
        display: 'block',
        height: '100%',
        width: '100%',
      }}/>

      </div>
  )
}

export default MyMap;