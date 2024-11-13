import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, setStats} = useContext(TwitterContext);

    const addFollower = () => {
        const followers = ++stats.followers;
        setStats({...stats, followers: followers});
    }

    const addFollowing = () => {
        const followings = ++stats.following;
        setStats({...stats, following: followings});
    }

    const reduceFollowers = e => {
        e.preventDefault();
        const followers = stats.followers - 1 >= 0 ? --stats.followers : stats.followers;
        setStats({...stats, followers: followers});
    }

    const reduceFollowings = e => {
        e.preventDefault();
        const followings = stats.following - 1 >= 0 ? --stats.following : stats.following;
        setStats({...stats, following: followings});
    }

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats cursor'}>
                <div onClick={addFollower} onContextMenu={reduceFollowers}>
                    Followers: {stats.followers}
                </div>
                <div onClick={addFollowing} onContextMenu={reduceFollowings}>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;