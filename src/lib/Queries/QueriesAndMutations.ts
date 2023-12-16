import { 
    // useQuery,
    useMutation,
    useQuery,
    useQueryClient,
    // useInfiniteQuery,
 } from '@tanstack/react-query';
import { createProject, getALLServices, getRecentProducts, getRecentProjects } from '../appwrite/api';
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

export const useGetRecentProjects = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_RECENT_PROJECTS],
        queryFn: getRecentProjects
    })
}

export const useGetFeaturedProjects = () => {
    return useQuery ({
        queryKey: [QUERY_KEYS.GET_FEATURED_PROJECTS],
        queryFn: getRecentProjects
    })
}

export const useGetRecentProducts = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_RECENT_PRODUCTS],
        queryFn: getRecentProducts
    })
}

export const useGetAllServices = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_ALL_SERVICES],
        queryFn: getALLServices
    })
}