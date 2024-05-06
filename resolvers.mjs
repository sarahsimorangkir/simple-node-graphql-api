export const resolvers = {
   Query : {
    checkApiStatus : ()=>{
        return {status: 'The api wrking correctly'}
    }
   } ,
   Mutation: {
    testMutations: async()=>{
        return{
            status: 'Mutations are working.'
        }
    }
   }
}