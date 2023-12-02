import User from '@/components/User';
import React from 'react';

export default async function Users() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return (
        <>
            <div className="p-5">
                <div className="mb-8">Users</div>

                <div className="flex flex-col space-y-3">
                    {users.map((user: any) => {
                        return <User user={user} />
                    })}
                </div>
            </div>
        </>
    );
}
