import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test(`status from props should be in the state`, () => {
        const component = create(<ProfileStatus status="Hi there!!!"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Hi there!!!')
    });

    test(`after creation count of <span> with status into component should be 1`, () => {
        const component = create(<ProfileStatus status="Hi there!!!"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.innerText).not.toBeNull()
    });

    test(`after creation <span> should contains correct status`, () => {
        const component = create(<ProfileStatus status="Hi there!!!"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe("Hi there!!!")
    });
});
