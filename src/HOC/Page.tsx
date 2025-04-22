import { PostList } from "./PostList";
import { withDataFetch } from "./withFetchData";

export function Page(){
    
    const fetchPosts = () => fetch('/api/posts').then(res => res.json())

    const PostListWithData = withDataFetch(PostList, fetchPosts)

    return(
        <PostListWithData/>
    )
}