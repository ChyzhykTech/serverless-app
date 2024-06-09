import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3Bucket from "./constructs/s3-bucket";

export class ServerlessAppStack extends cdk.Stack {
  constructor(scope: Construct) {
    super(scope);

    s3Bucket.CreateS3Bucket(scope, { bucketName: "static-content" });
  }
}
