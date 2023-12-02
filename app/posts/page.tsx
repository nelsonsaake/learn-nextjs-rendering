import { Post } from '@/types/post';
import Link from 'next/link';
import React from 'react';

export default async function Posts() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();

    return (
        <>
            <div className="flex flex-col space-y-4">

                <div className="text-lg bg-stone-800 p-5 text-white">
                    Posts
                </div>

                <div className='max-w-lg mx-auto flex flex-col space-y-8'>
                    {
                        posts.map((post) => {
                            return (
                                <div key={post.id}>
                                    <div className="text-xs mb-2 text-left">
                                        <Link href={`posts/${post.id}`}>See post #{post.id}</Link>
                                    </div>
                                    <div className='border-2 rounded-lg p-3 flex flex-col space-y-2'>
                                        <div className="text-xs">{post.title}</div>
                                        <hr />
                                        <div className="text-xs text-muted">{post.body}</div>
                                        <hr />
                                        <div className="text-xs text-right">user#{post.userId}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}