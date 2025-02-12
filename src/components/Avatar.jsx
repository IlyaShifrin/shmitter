const Avatar = ({user, setUser, size}) => {

    const changeAvatar = () => {
        const linkAvatar = prompt('Enter a link of a new avatar');
        const user = {avatar: linkAvatar, name: 'New avatar!!!'};
        setUser(user);
    }

    return (
        <img className={`user-avatar ${size ?? ''}`}
             onClick={changeAvatar}
             src={user.avatar} alt={user.name}/>
    );
};

export default Avatar;