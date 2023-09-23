import { S3 } from '@aws-sdk/client-s3'
import fs from "fs"

export const downloadFromS3 = async (file_key: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
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

            if (obj.Body instanceof require("stream").Readable) {
                const file = fs.createWriteStream(file_name);
                file.on('open', function (fd) {
                    // @ts-ignore
                    obj.Body?.pipe(file).on("finish", () => {
                        return resolve(file_name);
                    })
                })
            }
        } catch (err) {
            console.error(err);
            reject(err);
            return null;
        }
    })
}