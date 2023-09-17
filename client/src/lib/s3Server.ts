import * as aws from 'aws-sdk'

export const downloadFromS3 = async (file_key: string) => {
    try {
        aws.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACEESS_KEY,
        });

        const s3 = new aws.S3({
            params: {
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME
            },
            region: 'us-west-1'
        });

        // const params: {

        // }
    } catch (err) {
        console.error(err);
        return null;
    }
}