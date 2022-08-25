import { IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonModal, IonPage, IonReorder, IonReorderGroup, IonTitle, IonToolbar, useIonPicker } from "@ionic/react";
import { pizza } from "ionicons/icons";
import { useState } from "react";
import { PlaceListItem } from "../../places/list/PlaceListItem";

interface ProjectDetailPageProps {
    name: string;
    date: string;
    location: any;
    history: any;
    match: any;
}  

const places = [
    {label: "parek", edit: false}, 
    {label: "parek2", edit:false}
];

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ location, history, match, name, date }) => {

    const [text, setText] = useState<string>(name);
    const [number, setNumber] = useState<number>();
    const [present] = useIonPicker();

    const openPicker = async () => {
        present({
          columns: [
            {
              name: 'languages',
              options: [
                {
                  text: 'JavaScript',
                  value: 'javascript',
                },
                {
                  text: 'TypeScript',
                  value: 'typescript',
                },
                {
                  text: 'Rust',
                  value: 'rust',
                },
                {
                  text: 'C#',
                  value: 'c#',
                },
              ],
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Confirm',
              handler: (value) => {
                window.alert(`You selected: ${value.languages.value}`);
              },
            },
          ],
        });
      };
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/projects" />
                    </IonButtons>
                    <IonTitle>Project detail</IonTitle>
                    <IonButtons slot="end">
                        <IonButton >EDIT</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Project name</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>

                    <IonDatetimeButton style={{}} disabled={true} datetime="datetime"></IonDatetimeButton>
            
                    <IonModal keepContentsMounted={true}>
                        <IonDatetime disabled={true} id="datetime"></IonDatetime>
                    </IonModal>

                    <IonButton onClick={openPicker}>Open</IonButton>
                </IonList>
            </IonContent>

            <IonContent>
                <IonReorderGroup disabled={false}>
                    {places.map((place: any) => <PlaceListItem key={place.label} {...place}/>)}
                </IonReorderGroup>
            </IonContent>
        </IonPage>
    );
}