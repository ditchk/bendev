import { 
    // useQuery,
    useMutation,
    useQuery,
    useQueryClient,
    // useInfiniteQuery,
 } from '@tanstack/react-query';
import { CreateUserAccount, OrderSubmission, createProject, getALLServices, getBlogById, getFeaturedProjects, getRecentBlogs, getRecentProducts, getRecentProjects, saveMessageToDB, saveSubscriberToDB, signInAccount } from '../appwrite/api';
import { NewUser, myNewProject } from '@/types';
import { QUERY_KEYS } from './queryKeys';


export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: NewUser) => CreateUserAccount(user)
    })
}

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
        queryFn: getFeaturedProjects
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

export const useSignInAccount = () => {
    return useMutation({
        mutationFn:(user: {
            email: string;
            password: string;
        }) => signInAccount(user)
    });
 }

 export const useAddNewOrder = () => {
    return useMutation({
        mutationFn:(newOrder: {
            name: string;
            email: string;
            notes?: string;
        }) => OrderSubmission(newOrder)
    })
 }


 export const useSaveMessageToDB = () => {
    return useMutation ({
        mutationFn: (newMessage : {
            name: string;
            phone: string;
            email: string;
            message: string;
        }) => saveMessageToDB(newMessage)
    })
 }


 export const UseSaveSubscriber = () => {
    return useMutation({
        mutationFn: (newSubscriber : {
            Email: string
        }) => saveSubscriberToDB(newSubscriber)
    })
 }

 export const UseGetRecentBlogs = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_RECENT_BLOGS],
        queryFn: getRecentBlogs
    })
 }

 export const useGetBlogById = (blogId?: string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_POST_BY_ID, blogId],
      queryFn: () => getBlogById(blogId),
      enabled: !!blogId,
    });
  };