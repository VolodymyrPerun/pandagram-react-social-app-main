import {addPost, deletePost} from "./actions";
import profileReducer from "./index";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: "It's my first post", likesCount: 45},
        {id: 3, message: "What's up!!! Dude!!!", likesCount: 5}
    ]
};

it('length of posts should be incremented ', () => {
    // 1.test data
    let action = addPost('TEST');
    // 2. actions
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new added post should be correct', () => {
    // 1.test data
    let action = addPost('TEST');
    // 2. actions
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[3].message).toBe('TEST');
});

it('after deleting length of posts should be decremented ', () => {
    // 1.test data
    let action = deletePost(1);
    // 2. actions
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

it('after deleting length of posts should not be decremented if id is incorrect', () => {
    // 1.test data
    let action = deletePost(7);
    // 2. actions
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});
