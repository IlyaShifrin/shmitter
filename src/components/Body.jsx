import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

const Body = ({user, setUser, stats}) => {
    return (
        <div className={'body'}>
            <Sidebar user={user} setUser={setUser} stats={stats} />
            <Content/>
        </div>
    );
};

export default Body;