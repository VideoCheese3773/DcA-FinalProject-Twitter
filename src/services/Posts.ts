import { PostData } from "../types/posts";
import { postList } from "../mocks/getPosts";

class Post {
  async get(): Promise<PostData[]> {
    console.log("starting fetch...");
    const value: PostData[] = await new Promise((resolve) => {
      setTimeout(() => resolve(postList), 3000);
    });
    return value;
  }
}

export default new Post();