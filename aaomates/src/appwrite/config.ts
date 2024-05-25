import conf from "@/conf/conf";
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class Service {

    client = new Client()
    databases;
    bucket;


    // whenever the object is created then constructor is called which initializes the client and account
    constructor() {
        // Go to docs https://appwrite.io/docs/quick-starts/nextjs
        this.client
            .setEndpoint(conf.APPWRITE_ENDPOINT)
            .setProject(conf.APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // DB Documentation -> https://appwrite.io/docs/references/cloud/client-web/databases
    // ToDo find the datatype of the below parameters *********************************************


    async createPost({ name, address, state, city, status, slug, phone, pin }: any) {
        try {
            return await this.databases.createDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug,
                {
                    name,
                    address,
                    state,
                    city,
                    status,
                    phone,
                    pin
                }
            )
        } catch (error) {
            console.log("Appwrite service :: Create Post error " + error)

        }
    }

    async updatePost(slug: any, { name, address, state, city, status, phone, pin }: any) {
        try {
            return await this.databases.updateDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug,
                // below is the content we want to update
                {
                    name,
                    address,
                    state,
                    city,
                    status,
                    phone,
                    pin
                }
            )
        } catch (error) {
            console.log("Appwrite service :: Update Post error " + error)

        }
    }

    async deletePost(slug: any) {
        try {
            await this.databases.deleteDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: Delete Post error " + error)
            return false
        }
    }

    async getPost(slug: any) {
        try {
            // Here we are returning what we are getting
            return await this.databases.getDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: Get Post error " + error)
            return false
        }
    }

    // query is a default parameter which holds the query for finding all active posts and it is possible because we enable indexes in appwrite DB 
    async getPosts(queries = [Query.equal("status", true)]) {
        try {
            return await this.databases.listDocuments(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                // we can write queries here instead of writting in parameters
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: Get Posts error " + error)
            return false
        }
    }

    // ************************* File upload service *********************

    async uploadFile(file: any) {
        try {
            return await this.bucket.createFile(
                conf.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: Upload File error " + error)
            return false
        }
    }

    async deleteFile(fileId: any) {
        try {
            await this.bucket.deleteFile(
                conf.APPWRITE_BUCKET_ID,
                fileId,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: Delete File error " + error)
            return false
        }
    }

    getFilePreview(fileId: any) {
        return this.bucket.getFilePreview(
            conf.APPWRITE_BUCKET_ID,
            fileId
        )
    }

}

const service = new Service()
export default service;
