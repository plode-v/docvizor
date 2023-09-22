import { S3 } from '@aws-sdk/client-s3'
import fs from 'fs'

export const downloadFromS3 = async (file_key: string) => {
    try {
        const s3 = new S3({
            region: 'us-west-1',
            credentials: {
                accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY!,
                secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_ID!
            }
        });

        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
            Key: file_key
        };

        const obj = await s3.getObject(params);
        const file_name = `/tmp/${Date.now().toString()}.pdf`
        console.log(file_name)
    } catch (err) {
        
    }
}