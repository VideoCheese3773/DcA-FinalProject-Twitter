import { Actions, AppState, NavigationActions,PostActions } from "../types/store";

export const reducer = (
    currentAction: any,
    currentState: any
) => {
    const { action, payload } = currentAction;

    switch (action) {
        case NavigationActions.NAVIGATE:
            return {
                ...currentState,
                screen: payload,
            };

        case PostActions.ADD:
            return {
                ...currentState,
                posts: [
                    payload,
                    ...currentState.posts,
                ]
            }

        case PostActions.GET:
            return {
                ...currentState,
                posts: payload
            }
        case "SETUSER":
            currentState.user = action.payload;
            break;

        default:
            return currentState;
    }
};