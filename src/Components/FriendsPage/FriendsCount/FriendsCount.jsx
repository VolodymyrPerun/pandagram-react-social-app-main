import state from "../../../redux/state";


const FriendsCount = (props) => {
    props = state.sidebar.friends
    let sum = 0;
    props.forEach(function (user) {
        sum += (user.id).length
    })
    return (sum);
}

export default FriendsCount;
