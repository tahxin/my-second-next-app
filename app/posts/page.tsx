import { PostsData } from '../types/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

const PagePosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const Posts: PostsData[] = await res.json();

    return (
        <div className="flex flex-col gap-8">
            {/* Page header */}
            <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Feed</p>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
                    <Badge variant="secondary">
                        <FileText className="size-3" />
                        {Posts.length} posts
                    </Badge>
                </div>
            </div>

            {/* Posts grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Posts.map((post) => (
                    <Card key={post.id} size="sm">
                        <CardHeader>
                            <div className="flex items-start justify-between gap-2">
                                <CardTitle className="line-clamp-2 capitalize">{post.title}</CardTitle>
                                <Badge variant="outline" className="shrink-0 tabular-nums">#{post.id}</Badge>
                            </div>
                            <CardDescription className="line-clamp-3">{post.body}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PagePosts;