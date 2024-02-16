import { Client, Databases, Storage, Account, Avatars } from "appwrite";

export const myConfig = {
    projectId: import.meta.env.BES_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.BES_APPWRITE_DATABASE_ID,
    APPWRITEUrl: import.meta.env.BES_APPWRITE_ENDPOINT_URL,
    StorageId: import.meta.env.BES_APPWRITE_STORAGE_ID,
    productCollectionId: import.meta.env.BES_APPWRITE_PRODUCT_COLLECTION_ID,
    messageCollectionId: import.meta.env.BES_APPWRITE_MESSAGE_COLLECTION_ID,
    projectCollectionId: import.meta.env.BES_APPWRITE_PROJECT_COLLECTION_ID,
    featuredCollectionId: import.meta.env.BES_APPWRITE_FEATURED_ID,
    userCollectionId:import.meta.env.BES_APPWRITE_USER_COLLECTION_ID,
    blogCollectionIld:import.meta.env.BES_APPWRITE_BLOG_COLLECTION_ID,
    saveCollectionId:import.meta.env.BES_APPWRITE_SAVES_COLLECTION_ID,
    quoteCollectionId:import.meta.env.BES_APPWRITE_QUOTE_COLLECTION_ID,
    subsCollectionId:import.meta.env.BES_APPWRITE_SUBS_COLLECTION_ID,
    ProductId:import.meta.env.BES_APPWRITE_PRODUCT_ID
};

export const client = new Client();

client.setProject(myConfig.projectId);
client.setEndpoint(myConfig.APPWRITEUrl);

export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);
export const avatars = new Avatars(client);