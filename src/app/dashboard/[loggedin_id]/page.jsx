export default function userDashboard ({params}){
    const id = params.loggedin_id
    
    return(
        <>
        <h1>{id}</h1>
        </>
    )
}