import UserAvatar from "../UserAvatar"

interface UserAvatarGroupItemProps{
    user: any;  
    index: any;
}

const UserAvatarGroupItem: React.FC<UserAvatarGroupItemProps> = ({user, index: zIndex}) => {
    return (
        <span style={{margin: "-2px", position: "relative", zIndex}}>
            <UserAvatar/>
        </span>
    )
}

export default UserAvatarGroupItem;