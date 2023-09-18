import AWS from "aws-sdk"

export const uploadToS3 = async (file: File) => {
    try {
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
        });

        const s3 = new AWS.S3({
            params: {
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME
            },
            region: "us-west-1"
        });

        const file_key = "uploads/" + Date.now().toString() + file.name.replace(" ", "-")

        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
            Key: file_key,
            Body: file
        };

        const upload = s3
            .putObject(params)
            .on("httpUploadProgress", event => {
                console.log("uploading to S3...",
                parseInt(((event.loaded * 100) / event.total).toString())) + "%"
            })
            .promise();

            await upload.then(() => {
                console.log("successfully uploaded to S3", file_key, file.name);
            });

            return Promise.resolve({
                file_key,
                file_name: file.name
            })
    } catch (err) {
     console.log(err);   
    }
}

export const getS3Url = (file_key: string) => {
    const url = `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.us-west-1.amazonaws.com/${file_key}`
    return url;
}