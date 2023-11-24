import { 
    // useQuery,
    useMutation,
    useQueryClient,
    // useInfiniteQuery,
 } from '@tanstack/react-query';
import { createProject } from '../appwrite/api';
import { myNewProject } from '@/types';
import { QUERY_KEYS } from './queryKeys';

// export const useSignInAccount = () => {
//     return useMutation({
//         mutationFn:(user: {
//             name: string;
//             password: string;
//         }) => signInAccount(user)
//     });
//  }

 export const useCreateProject = () => {
    const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn: (project: myNewProject) => createProject(project),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: [QUERY_KEYS.GET_RECENT_PROJECTS]
                })
            }
        })
    }