import {
    useMutation,
    useQuery,
    useQueryClient,
  } from '@tanstack/react-query'

export default function TanstackQuery(){

    // getting some data
    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
          const response = await fetch(
            'https://api.github.com/repos/TanStack/query',
          )
          return await response.json()
        },
    })

    const queryClient = useQueryClient()

    // posting some data & updating displayed data
    const mutation = useMutation({
        mutationFn: (event : React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            return fetch('/api', {method : 'POST', body : new FormData(event.target as HTMLFormElement)})
        },
        onSuccess : () => {
            queryClient.invalidateQueries({ queryKey: ['repoData'] })
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    
    return (
        <form onSubmit={mutation.mutate}>
            <div className="flex flex-col mt-[50px]">
                <h1>{data.full_name}</h1>
                <p className='max-w-[600px] mx-auto my-[20px]'>{data.description}</p>
                <strong>Subscribers : {data.subscribers_count}</strong>{' '}
                <strong>Stargazers : {data.stargazers_count}</strong>{' '}
                <strong>Forks : {data.forks_count}</strong>
                <div>{isFetching ? 'Updating...' : ''}</div>
            </div>
        </form>
    )
}