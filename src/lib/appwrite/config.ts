import { Client, Databases, Storage, Account } from "appwrite";

export const myConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    APPWRITEUrl: import.meta.env.VITE_APPWRITE_ENDPOINT_URL,
    userId: import.meta.env.VITE_APPWRITE_USER_ID,
    StorageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    productCollectionId: import.meta.env.VITE_APPWRITE_PRODUCT_COLLECTION_ID,
    messageCollectionId: import.meta.env.VITE_APPWRITE_MESSAGE_COLLECTION_ID,
    projectCollectionId: import.meta.env.VITE_APPWRITE_PROJECT_COLLECTION_ID
};

export const client = new Client();

client.setProject(myConfig.projectId);
client.setEndpoint(myConfig.APPWRITEUrl);

export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);