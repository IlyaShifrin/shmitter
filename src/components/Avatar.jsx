import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, setUser} = useContext(TwitterContext);

    const changeAvatar = () => {
        const linkAvatar = prompt('Enter a link of new avatar');
        setUser({...user, avatar: linkAvatar || user.avatar});
    }

    const changeName = (e) => {
        e.preventDefault();
        const name = prompt('Enter new name');
        setUser({...user, name: name || user.name});
    }

    return (
        <img className={`user-avatar ${size ?? ''}`}
             onClick={changeAvatar}
             onContextMenu={changeName}
             src={user.avatar} alt={user.name}/>
    );
};

export default Avatar;