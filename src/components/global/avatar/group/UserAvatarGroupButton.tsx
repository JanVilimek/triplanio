import { IonButton, IonText } from "@ionic/react";
import UserAvatar from "../UserAvatar";

interface UserAvatarGroupButtonProps{
    remain: number;  
    index: any;
}

const styles = {
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    margin: "0px 0px 0px -2px", 
    backgroundColor: "#7c7c7cd6",
    color:"black",
}

const textStyles = {
    width: "24px",
    //position: "absolute",
    height: "24px",
    margin: "auto",
    fontWeight: 500,
    fontSize: "10px",
    textAlign: "center",
        paddingTop: "7px",  
}

const UserAvatarGroupButton: React.FC<UserAvatarGroupButtonProps> = ({remain, index: zIndex}) => {
    return (
        <span style={{...styles, position: "absolute",
        zIndex}}>
           <IonText style={{...textStyles, position: "absolute"}}>+{remain}</IonText>
        </span>
    )
}

export default UserAvatarGroupButton;




