import { useGetUsersQuery } from '@/redux/services/userApi'

const UserList = () => {
    const { isLoading, isFetching, data, error } = useGetUsersQuery(null, {
        refetchOnFocus: true,
        refetchOnReconnect: true,
        pollingInterval: 20000,
    })

    return (
        <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading || isFetching ? (
                <p>Loading...</p>
            ) : data ? (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        gap: 20,
                    }}
                >
                    {data.map((user: any) => (
                        <div
                            key={user.id}
                            style={{
                                border: '1px solid #ccc',
                                textAlign: 'center',
                            }}
                        >
                            <img
                                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                                alt={user.name}
                                style={{ height: 180, width: 180 }}
                            />
                            <h3>{user.name}</h3>
                        </div>
                    ))}
                </div>
            ) : null}
        </main>
    )
}

export default UserList
