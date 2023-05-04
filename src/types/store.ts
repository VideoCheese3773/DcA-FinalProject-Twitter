export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
    LOGGED = "LOGGED",
    PROFILE = "PROFILE",
    DASHBOARD = "DASHBOARD",
}

export type AppState = {
    screen: Screens;
};

export enum NavigationActions {
    "NAVIGATE" = "NAVIGATE",
}

export interface NavigateAction {
    action: NavigationActions.NAVIGATE;
    payload: Screens;
}

export type Actions = NavigateAction;