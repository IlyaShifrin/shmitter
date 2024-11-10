import Avatar from "./Avatar.jsx";

const Navigation = ({user, setUser}) => {
    return (
        <div className={'nav'}>
            <Avatar user={user} setUser={setUser} size={'small'}/>
        </div>
    );
};

export default Navigation;