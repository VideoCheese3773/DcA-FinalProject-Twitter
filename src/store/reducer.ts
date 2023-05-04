import { Actions, AppState, NavigationActions,PostActions } from "../types/store";

export const reducer = (
    currentAction: Actions,
    currentState: AppState
): AppState => {
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

        default:
            return currentState;
    }
};