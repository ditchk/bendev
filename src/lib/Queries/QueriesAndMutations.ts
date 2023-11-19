// import { 
//     useQuery,
//     useMutation,
//     useQueryClient,
//     useInfiniteQuery,
//  } from '@tanstack/react-query';
// import { signInAccount } from '../appwrite/api';
// import { myNewProject } from '@/types';

// export const useSignInAccount = () => {
//     return useMutation({
//         mutationFn:(user: {
//             name: string;
//             password: string;
//         }) => signInAccount(user)
//     });
//  }

//  export const useCreateProject = () => {
//     const queryClient = useQueryClient();
    
//         return useMutation({
//             mutationFn: (post: myNewProject) => createProject(post),
//             onSuccess: () => {
//                 queryClient.invalidateQueries({
//                     queryKey: [QUERY_KEYS.GET_RECENT_POSTS]
//                 })
//             }
//         })
//     }