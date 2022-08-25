import { IonAvatar, IonBadge, IonChip, IonItem } from '@ionic/react';
import UserAvatar from '../UserAvatar';
import UserAvatarGroupButton from './UserAvatarGroupButton';
import UserAvatarGroupItem from './UserAvatarGroupItem';

const users = [
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""},
    {icon: ""}
];

interface AvatarGroupProps {
    max?: number;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({max=3}) => {
    const usersCount = users.length;
    
    console.error(max, usersCount );
    return (
        <>
            {
                users.map((user, index) => index < max &&
                    <UserAvatarGroupItem user={user} index={usersCount-index} />
                )
            }

            {
                usersCount >= max && 
                <UserAvatarGroupButton remain={usersCount-max} index={0}/>
            }
        </>)
        
    
}


export default AvatarGroup;