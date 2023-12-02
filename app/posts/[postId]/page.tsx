import React from 'react';
import { Post } from '@/types/post';

export default async function Posts({ params }: { params: { postId: string } }) {

    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await response.json();

    return (
        <>
            <div className="flex flex-col space-y-4">

                <div className="text-lg bg-stone-800 p-5 text-white">
                    Post
                </div>

                <div className='max-w-lg mx-auto flex flex-col space-y-8'>
                    <div className='p-3 flex flex-col space-y-4'>
                        <div className="text-sm font-bold text-center capitalize">
                            {post.title}
                        </div>
                        <div className="text-xs text-muted text-center px-5">
                            {post.body}
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <div className="text-xs text-left italic">by user#{post.userId}</div>
                            <div className="text-xs mb-2 text-right">#{post.id}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}