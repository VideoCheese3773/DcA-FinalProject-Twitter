import { NavigateAction, NavigationActions, Screens,PostActions,GetPostAction,AddPostAction } from "../types/store";
import PostsService from '../services/Posts'

export const navigate = (screen: Screens): NavigateAction => {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen,
    };
};

export const getPosts = async (): Promise<GetPostAction> => {
    const posts = await PostsService.get();
    return {
        action: PostActions.GET,
        payload: posts
    }
}

export const addNewTrip = ({payload}: Pick<AddPostAction, "payload">): AddPostAction => {
    return {
        action: PostActions.ADD,
        payload
    }
}