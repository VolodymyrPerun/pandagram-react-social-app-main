import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test(`status from props should be in the state`, () => {
        const component = create(<ProfileStatus status="Hi there!!!"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Hi there!!!');
    });

    test(`after creation count of <span> with status into component should be 1`, () => {
        const component = create(<ProfileStatus status="Hi there!!!"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.innerText).not.toBeNull();
    });

    test(`after creation <span> should contains correct status`, () => {
        const component = create(<ProfileStatus status="Hi there!!!"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe("Hi there!!!");
    });

    test(`after creation <input> should not be displayed`, () => {
        const component = create(<ProfileStatus status="Hi there!!!"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test(`<input> should be displayed in editMode instead of span, with value`, () => {
        const component = create(<ProfileStatus status="Hi there!!!"/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("Hi there!!!");
    });

    test(`callback should be called`, () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Hi there!!!" updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
