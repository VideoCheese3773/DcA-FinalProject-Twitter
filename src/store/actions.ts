import { NavigateAction, NavigationActions, Screens,PostActions,GetPostAction,AddPostAction, Actions } from "../types/store";
import PostsService from '../services/Posts'
import firebase from "../utils/firebase";

export const navigate = (screen: Screens): NavigateAction => {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen,
    };
};

export const getPosts = async (): Promise<GetPostAction> => {
    //const posts = await PostsService.get();
    const posts =await firebase.getPostFromDB();
    return {
        action: PostActions.GET,
        payload: posts
    }
}

export const addNewPost = async ({payload}: Pick<AddPostAction, "payload">): Promise <Actions> => {
    await firebase.postDB(payload);
    return {
        action: PostActions.ADD,
        payload
    }
}