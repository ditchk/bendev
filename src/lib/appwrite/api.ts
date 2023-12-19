import { myConfig, storage } from "./config";
import { ID, Query } from "appwrite";
import { databases, account, } from "./config";
import { NewUser, myNewProject } from "@/types";


export async function CreateUserAccount(user: NewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.name,
      user.email,
      user.password,
    )

    return newAccount;
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function saveMessageToDB(messages: {
    email: string;
    name: string;
    phone: string;
    message: string;
}) {
    try {
        const newNmessage =await databases.createDocument(
            myConfig.databaseId,
            myConfig.messageCollectionId,
            ID.unique(),
            messages
        );


        return newNmessage
    } catch (error) {
        console.log(error);
    }
}

export async function createProject(project: myNewProject) {
    try {
      
      const uploadedFile = await uploadFile(project.file[0]);
  
      if (!uploadedFile) throw Error;
  
      // Get file url
      const fileUrl = getFilePreview(uploadedFile.$id);
      if (!fileUrl) {
        await deleteFile(uploadedFile.$id);
        throw Error;
      }
  
      // Create post
      const newProject = await databases.createDocument(
        myConfig.databaseId,
        myConfig.projectCollectionId,
        ID.unique(),
        {
          projectInfo: project.projectInfo,
          ProjectName: project.ProjectName,
          imageUrl: fileUrl,
          ImageId: uploadedFile.$id,
        }
      );
  
      if (!newProject) {
        await deleteFile(uploadedFile.$id);
        throw Error;
      }
  
      return newProject;
    } catch (error) {
      console.log(error);
    }
  }

  export async function uploadFile(file: File) {
    try {
      const uploadedFile = await storage.createFile(
        myConfig.StorageId,
        ID.unique(),
        file
      );
  
      return uploadedFile;
    } catch (error) {
      console.log(error);
    }
  }


  export function getFilePreview(fileId: string) {
    try {
      const fileUrl = storage.getFilePreview(
        myConfig.StorageId,
        fileId,
        2000,
        2000,
        "top",
        100
      );
  
      if (!fileUrl) throw Error;
  
      return fileUrl;
    } catch (error) {
      console.log(error);
    }
  }

  export async function deleteFile(fileId: string) {
    try {
      await storage.deleteFile(myConfig.StorageId, fileId);
  
      return { status: "ok" };
    } catch (error) {
      console.log(error);
    }
  }

  export async function getRecentProjects(){
    const projects = await databases.listDocuments(
      myConfig.databaseId,
      myConfig.projectCollectionId,
      [Query.orderDesc('$createdAt'), Query.limit(20)]
    )

    if(!projects) throw Error;

    return projects
  }

  export async function getFeaturedProjects() {
    const FeaturedProjects = await databases.listDocuments(
      myConfig.databaseId,
      myConfig.projectCollectionId,
      [Query.orderDesc('$createdAt'), Query.limit(3)]
    )
    if(!FeaturedProjects) throw Error;

    return FeaturedProjects
  }

  export async function getRecentProducts() {
    const RecentProducts = await databases.listDocuments(
      myConfig.databaseId,
      myConfig.productCollectionId,
      [Query.orderAsc(''), Query.limit(1)]
    )

    if(!RecentProducts) throw Error;

    return RecentProducts
  }

  export async function getALLServices() {
    const AllServices = await databases.listDocuments(
      myConfig.databaseId,
      myConfig.productCollectionId,
      [Query.orderDesc(''), Query.limit(6)]
    )

    if(!AllServices) throw Error;

    return AllServices
  }

  export async function signInAccount(user: {email:string; password:string}) {
    try {
        const session = await account.createEmailSession(user.email, user.password);
        
        return session;
    } catch(error) {
        console.log(error)
    }
}

export async function getCurrentUser() {
  try {
      const currentAccount = await account.get();

      if(!currentAccount) throw Error;

      const currentUser = await databases.listDocuments(
          myConfig.databaseId,
          myConfig.userCollectionId,
          [Query.equal('accountId', currentAccount.$id)]
      )
      if(!currentUser) throw Error;

      return currentUser.documents[0];
  } catch(error) {
      console.log(error)
  }
}