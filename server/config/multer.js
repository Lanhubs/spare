// config/multer.js
import AWS from "aws-sdk";
import multer from "multer";
import { env } from "./config.js";
export const params = {
  Bucket: "spare-bucket",
};
export const S3 = new AWS.S3({
  accessKeyId: env.AWS_ACCESS_KEY_ID,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  region: env.AWS_REGION,
  s3BucketEndpoint: false,
  endpoint:env.AWS_S3_ENDPOINT /* "https://s3.amazonaws.com" */
});
export const upload = multer({});

