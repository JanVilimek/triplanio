import { IonIcon, IonItem, IonLabel, IonReorder } from "@ionic/react";
import { pizza, swapVerticalOutline } from "ionicons/icons";

interface PlaceListItemProps {
    label: string;
    edit?: boolean;
}  
export const PlaceListItem: React.FC<PlaceListItemProps> = ({label, edit}) => {
    return (
        <IonItem>
            <IonLabel>{label}</IonLabel>
            {edit &&
                <IonReorder slot="end">
                    <IonIcon icon={swapVerticalOutline} />
                </IonReorder>
            }
        </IonItem>
    );
}