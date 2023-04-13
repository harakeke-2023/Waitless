import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function MenuItems(){
    return(
        <QueryClientProvider client={queryClient}>
            <MenuItem/>
        </QueryClientProvider>
   
        )

}
 export function MenuItem() {
  const { data, isLoading, error } = useQuery( {
    queryKey:['menu'],
    queryFn: () => fetch('/api/v1/menuitems').then((res) => res.json()),
  });


  console.log(data);
  
  if(isLoading) return <div>Loading...</div>
  
//   if(error) return <div>Error: {error.message}</div>

  return (
   <>
     <div>
        <h2>{data.name}</h2>
     </div>
   </>
  );
}