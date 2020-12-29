const FriendsCount = (props) => {
    let sum = 0;

    props.friends.forEach(function (user) {
        sum += user.id[0].length;
    });

    return (sum);
};

export default FriendsCount;
