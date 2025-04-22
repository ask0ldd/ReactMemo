export function PostList({isLoading, error, data} : IPostListProps){
    if (isLoading) return (<p>Loading...</p>);
    if (error) return (<p>Error: {error.message}</p>);
    return (
        <ul>
            {
                data.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul>
    );
}

interface IPostListProps{
    isLoading : boolean
    error : Error
    data : IPost[]
}

interface IPost {
    id : string
    title : string
}