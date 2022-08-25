import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";


interface ProjectProps {
    name: string;
}  
export const ProjectPage: React.FC<ProjectProps> = ({ name }) => {
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
                <IonTitle>Project page {name}</IonTitle>
            </IonToolbar>
            </IonHeader>
        </IonPage>
    );
}