import { PostList } from "./PostList";
import { withDataFetch } from "./withFetchData";

export function PageHOC(){
    
    const fetchPosts = () => fetch('/api/posts').then(res => res.json())

    const PostListWithData = withDataFetch(PostList, fetchPosts)

    return(
        <PostListWithData/>
    )
}