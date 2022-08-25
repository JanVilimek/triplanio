import { IonImg } from "@ionic/react";

interface MapViewProps {
    place: {
        coordinate:{
            lat: number
            lng: number
        }
    }
    size?: {
        x: number
        y: number
        zoom?: number
        scale?: number
    }
    marker?:{

    }
}  

const MapView: React.FC<MapViewProps> = (place, size: any) => {
    console.log(place);
    const {place: {coordinate: {lat, lng}}} = place;
    const {x, y, zoom, scale} = size;

    const staticMapLink =(`https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCuA1KYVm96YCDaQ74IjLU7rHraJ2cnhWQ&markers=size:mid|color:red|${lat},${lng}&size=${x ?? '800'}x${y ?? '200'}&scale=${scale ?? '2'}&center=${lat},${lng}&zoom=${zoom ?? '9'}`
    )

    return (
        <IonImg src={staticMapLink} />
    )
    
}
export default MapView;