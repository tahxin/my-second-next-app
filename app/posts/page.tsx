import { PostsData } from '../types/types';

const PagePosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const Posts: PostsData[] = await res.json();

    return (
        <div>
            <h2>Welcome to the Post Page</h2>
            <p>We have a total of {Posts.length} posts.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Posts.map((post) => (
                    <div key={post.id} className="border border-gray-200 p-4">
                        <h3 className="text-lg font-bold">{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PagePosts;