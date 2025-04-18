import { Client, Databases, ID, Query } from 'appwrite';

const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const client = new Client();
client.setProject(APPWRITE_PROJECT_ID);
client.setEndpoint('https://cloud.appwrite.io/v1');

const databases = new Databases(client);

export { databases, ID, Query };
