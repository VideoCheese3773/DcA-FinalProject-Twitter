export type Observer = { render: () => void } & HTMLElement;

import { PostData } from "./posts";

export enum Screens {
    LOGGED = "LOGGED",
    PROFILE = "PROFILE",
    DASHBOARD = "DASHBOARD",
}

export type AppState = {
    screen: Screens,
    posts:PostData[],
};

export enum NavigationActions {
    "NAVIGATE" = "NAVIGATE",
}

export enum PostActions {
    "ADD" = "ADD",
    "GET" = "GET",
}

export interface NavigateAction {
    action: NavigationActions.NAVIGATE;
    payload: Screens;
}

export interface AddPostAction {
    action: PostActions.ADD,
    payload: PostData
}

export interface GetPostAction {
    action: PostActions.GET,
    payload: PostData[]
}

export type Actions = NavigateAction|AddPostAction|GetPostAction;