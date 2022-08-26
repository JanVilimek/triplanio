import { IonAvatar, IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonModal, IonPage, IonReorder, IonReorderGroup, IonRow, IonSkeletonText, IonText, IonThumbnail, IonTitle, IonToolbar, useIonPicker } from "@ionic/react";
import { settings } from "cluster";
import { add, airplaneOutline, bedOutline, chevronForwardOutline, eyeOffOutline, fastFoodOutline, gitBranchOutline, handRightOutline, locationOutline, logoVimeo, mapOutline, personCircleOutline, pizza, settingsOutline, shareOutline, trashBinOutline, walletOutline } from "ionicons/icons";
import { useState } from "react";
import AvatarGroup from "../../global/avatar/group/AvatarGroup";
import Loading from "../../global/Loading";
import { PlaceListItem } from "../../places/list/PlaceListItem";
import StatisticsSegment from "../list/segments/StatisticsSegment";

interface ProjectDetailPageProps {
    name: string;
    date: string;
    location: any;
    history: any;
    match: any;
}  

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ location, history, match, name, date }) => {

    const [text, setText] = useState<string>(name);
    const [present] = useIonPicker();
    
    const [loaded, setLoaded] = useState(true);
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/projects" />
                    </IonButtons>
                    <IonTitle>Project details</IonTitle>
                    <IonButtons slot="end">
                        <IonButton ><IonIcon slot="icon-only" icon={shareOutline}/></IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            

            <IonContent>
                {loaded && (
                    <>
                    <IonCard >
                        <IonCardHeader style={
                        {
                            backgroundImage: `linear-gradient(to left, rgba(245, 246, 252, 0.52), rgb(0 0 0 / 73%)), url('https://i0.wp.com/files.tripstodiscover.com/files/2016/11/bigstock-blue-lagoon-near-Reykjavik-Ic-83067611-1.jpg?resize=1200,628')`, 
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }
                    }>
                            <IonCardTitle>bipbup</IonCardTitle>
                            <IonDatetimeButton disabled datetime="datetime"></IonDatetimeButton>
                            <IonModal keepContentsMounted={true}>
                                <IonDatetime value="2022-04-21T00:00:00" presentation="date"  id="datetime"></IonDatetime>
                            </IonModal>

                        </IonCardHeader>
                        <IonCardContent style={{paddingTop: "15px"}}>
                                
                        </IonCardContent>
                    </IonCard>
                    <IonCard >
                        <IonCardContent>
                            <IonList>
    
                                
                
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                    
                    <StatisticsSegment />

                    <IonCard >
                            <IonList>
                            <IonItemSliding>
                                    <IonItem href="#">
                                        <IonIcon icon={gitBranchOutline} slot={"start"}/>
                                        <IonLabel>Planning</IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot={"end"} />
                                    </IonItem>
                                    <IonItemOptions side="end">
                                        <IonItemOption onClick={() => {}}>
                                            <IonIcon icon={trashBinOutline}/>
                                        </IonItemOption>
                                    </IonItemOptions>
                                </IonItemSliding>
                                
                
                            </IonList>
                    </IonCard>
                    <IonCard>
                        <IonCardHeader>
                            <IonText>Project content</IonText>
                        </IonCardHeader>
                            <IonList>
                               

                                <IonItemSliding>
                                    <IonItem href="#">
                                        <IonIcon icon={airplaneOutline} slot={"start"}/>
                                        <IonLabel>Transportations</IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot={"end"} />
                                    </IonItem>
                                    <IonItemOptions side="end">
                                        <IonItemOption onClick={() => {}}>
                                            <IonIcon icon={trashBinOutline}/>
                                        </IonItemOption>
                                    </IonItemOptions>
                                </IonItemSliding>

                                <IonItemSliding>
                                    <IonItem href="#">
                                        <IonIcon icon={bedOutline} slot={"start"}/>
                                        <IonLabel>Accomodations</IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot={"end"} />
                                    </IonItem>
                                    <IonItemOptions side="end">
                                        <IonItemOption onClick={() => {}}>
                                            <IonIcon icon={trashBinOutline}/>
                                        </IonItemOption>
                                    </IonItemOptions>
                                </IonItemSliding>

                                <IonItemSliding>
                                    <IonItem href="#">
                                        <IonIcon icon={handRightOutline} slot={"start"}/>
                                        <IonLabel>Appointments</IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot={"end"} />
                                    </IonItem>
                                    <IonItemOptions side="end">
                                        <IonItemOption onClick={() => {}}>
                                            <IonIcon icon={trashBinOutline}/>
                                        </IonItemOption>
                                    </IonItemOptions>
                                </IonItemSliding>

                                <IonItemSliding>
                                    <IonItem href="#">
                                        <IonIcon icon={walletOutline} slot={"start"}/>
                                        <IonLabel>Rentals</IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot={"end"} />
                                    </IonItem>
                                    <IonItemOptions side="end">
                                        <IonItemOption onClick={() => {}}>
                                            <IonIcon icon={trashBinOutline}/>
                                        </IonItemOption>
                                    </IonItemOptions>
                                </IonItemSliding>

                                <IonItemSliding>
                                    <IonItem href="#">
                                        <IonIcon icon={locationOutline} slot={"start"}/>
                                        <IonLabel>Places</IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot={"end"} />
                                    </IonItem>
                                    <IonItemOptions side="end">
                                        <IonItemOption onClick={() => {}}>
                                            <IonIcon icon={trashBinOutline}/>
                                        </IonItemOption>
                                    </IonItemOptions>
                                </IonItemSliding>
                            </IonList>
                    </IonCard>


                 </>)}

                 {!loaded && (
                    <>
                        <IonCard>
                            <IonCardHeader >
                                <IonSkeletonText style={{width: "150px"}} animated={true} />
                            </IonCardHeader>
                            <IonCardContent>
                                <IonSkeletonText animated={true} />
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader >
                                <IonSkeletonText style={{width: "150px"}}animated={true} />
                            </IonCardHeader>
                            <IonCardContent>
                                <IonSkeletonText animated={true} />
                            </IonCardContent>
                        </IonCard>

                        <IonCard>
                            <IonList>
                                <IonListHeader>
                                    <IonSkeletonText style={{width: "150px"}} animated={true}/>
                                </IonListHeader>
                                
                            </IonList>
                            <IonCardHeader >
                                <IonSkeletonText style={{width: "150px"}} animated={true} />
                            </IonCardHeader>
                            <IonCardContent>
                                <IonSkeletonText animated={true} />
                            </IonCardContent>
                        </IonCard>
                    </>
                 )}
            </IonContent>

                
                <IonFab style={{marginBottom:"10px"}} vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={add} />
                    </IonFabButton>
                    <IonFabList side="start">
                        <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
                    </IonFabList>
                </IonFab>
                
        </IonPage>
    );
}