import { Client, Account } from "appwrite";

const client = new Client();

console.log("Appwrite Endpoint:", import.meta.env.VITE_APPWRITE_URL);
console.log("Appwrite Project ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);


client
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);




