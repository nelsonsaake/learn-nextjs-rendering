import React from 'react';

export default function User({ user }: any) {
    return <div key={user.id}>
        <div className='text-xs'>{user.username}</div>
        <div className='text-sm mb-0'>{user.name}</div>
        <div className='text-sm mb-0'>{user.email}</div>
        <div className='inline-block min-h-1 w-48 border-t-2 p-1 mt-0'></div>
    </div>
}