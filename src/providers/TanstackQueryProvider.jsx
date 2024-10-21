const TanstackQueryProvider = ({children}) => {
    const queryClient = new queryClient();
    return ( 
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
     );
}
 
export default TanstackQueryProvider;