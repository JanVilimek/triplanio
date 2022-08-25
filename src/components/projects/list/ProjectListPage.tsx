import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import { createOutline, filterOutline, flowerOutline, pencilOutline, pin, star, walk, warning, wifi, wine } from "ionicons/icons";
import MyMap from "../../maps/MyMap";
import MapView from "../../maps/views/MapView";
import { ProjectListItem } from "./ProjectListItem";


interface ProjectListPageProps {
    projects?: string;
}  

const projects =[
  {name: "Iceland 2022", date: "12.05.2022", image: "https://i0.wp.com/files.tripstodiscover.com/files/2016/11/bigstock-blue-lagoon-near-Reykjavik-Ic-83067611-1.jpg?resize=1200,628"},
  {name: "Bali 2023", date: "01.06.2022", image: "https://www.kuoni.co.uk/upload/inspiration/louise/bali-beauty/bali-beauty-header.jpg"},
  {name: "Faraoe Islands 2023", date: "01.06.2022", image: "https://media.timeout.com/images/105705255/750/422/image.jpg"},
  {name: "United States 2024", date: "01.06.2022", image: "https://cdn.wallpapersafari.com/94/37/P4WsE9.jpg"},
  {name: "Crete 2024", date: "01.06.2022", image: "https://olympic.azureedge.net/cloudcache/9/5/e/8/4/0/95e84023e27979b9cae1470638c4fa4aab7362e7.jpg"},
];

const view = {
  place: {coordinate:{
    lat: 64.25,
    lng: -20,
  },}
  
}
export const ProjectListPage: React.FC<ProjectListPageProps> = () => {
    return (
        <IonPage>
            <IonHeader>
              <IonToolbar>
                  <IonTitle>My Projects</IonTitle>
                  <IonButtons slot="end">
                    <IonButton>
                      <IonIcon icon={filterOutline}></IonIcon>
                    </IonButton>
                  </IonButtons>
              </IonToolbar>
            </IonHeader>
            
            <IonContent>
              <MapView {...view} />
            </IonContent>
            <IonContent>
              {
                projects.map((project: any) => <ProjectListItem key={project.name} {...project}/>)
              }
            </IonContent> 
        </IonPage>
    );
}