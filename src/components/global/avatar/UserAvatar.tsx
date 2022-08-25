


const styles = {
    borderRadius: "50%",
    width: "24px",
    
}

const UserAvatar: React.FC = () =>{
    return (
        <img style={styles} src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon" />
    )
}

export default UserAvatar;