import { IonAccordion, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRow } from "@ionic/react";
import { timeOutline } from "ionicons/icons";

const StatisticsSegment: React.FC = () => {
    return (
        <IonCard>
            <IonCardContent>
              
                
                        <IonGrid>
                            <IonRow>
                                <IonCol style={{width: "50px"}}>
                                        <IonIcon size="small" icon={timeOutline}/>
                                </IonCol>
                                <IonCol >
                                        3 d 2 h
                                </IonCol>
                                <IonCol>
                                    <IonItem> 
                                        <IonIcon icon={timeOutline}/></IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem> 
                                        3 d 2 h
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
            
        </IonCard>
    )
}

export default StatisticsSegment;