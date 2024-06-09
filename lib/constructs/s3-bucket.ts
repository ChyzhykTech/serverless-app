import { aws_s3, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import config from "../config";

interface S3BucketProps extends StackProps {
  bucketName: string;
}

export function CreateS3Bucket(scope: Construct, props: S3BucketProps) {
  return new aws_s3.Bucket(scope, `${config.ENV}-s3-${props.bucketName}`, {
    bucketName: `chyzhyk-tech-${config.ENV}-${props.bucketName}`,
    encryption: aws_s3.BucketEncryption.S3_MANAGED,
    publicReadAccess: true,
    enforceSSL: true,
    versioned: true,
  });
}
