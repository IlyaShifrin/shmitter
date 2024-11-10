import Stats from "./Stats.jsx";

const Sidebar = ({user, setUser, stats}) => {
    return (
        <div className={'sidebar'}>
            <Stats user={user} setUser={setUser} stats={stats} />
        </div>
    );
};

export default Sidebar;