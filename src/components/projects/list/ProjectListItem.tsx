import { IonButton, IonCard,IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonImg, IonItem, IonLabel, IonTitle } from "@ionic/react";
import { eyeOffOutline } from "ionicons/icons";

interface ProjectListItemProps {
    name: string;
    date: string;
    image: string;
    shared: boolean;
}  
export const ProjectListItem: React.FC<ProjectListItemProps> = ({ name, date, image }) => {
    const routeToProjectDetail = (data: any) => {
        console.error("parek", data)
    }

    return (
        <IonCard onClick={routeToProjectDetail} href="/project" routerDirection="forward" style={
            {
                backgroundImage: `linear-gradient(to left, rgba(245, 246, 252, 0.52), rgb(0 0 0 / 73%)), url('${image}')`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }
        }>
            <IonCardHeader >
                <IonCardSubtitle>{date}</IonCardSubtitle>
                <IonCardTitle>{name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <span>
                    <IonIcon slot="start" icon={eyeOffOutline}></IonIcon>
                </span>
            </IonCardContent>
        </IonCard>
    );
}