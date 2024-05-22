// Production grade approach so that TypeScript does't give error ex-> we have to put ! for forcefully enrap the var
// But with this approach we are certain that our variable is always present

const conf = {
    APPWRITE_ENDPOINT: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
    APPWRITE_PROJECT_ID: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    APPWRITE_DATABASE_ID: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    APPWRITE_COLLECTION_ID: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID),

}
export default conf