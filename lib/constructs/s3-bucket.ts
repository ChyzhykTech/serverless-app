import {aws_s3, Stack, StackProps} from "aws-cdk-lib";
import { Construct } from "constructs";
import config from "../config";

interface S3BucketProps extends StackProps {
  bucketName: string;
}

export class S3BucketConstruct extends Construct {
  constructor(scope: Stack, id: string, props: S3BucketProps) {
    super(scope, id);

    new aws_s3.Bucket(scope, `${config.ENV}-s3-${props.bucketName}`, {
      bucketName: `chyzhyk-tech-${config.ENV}-${props.bucketName}`,
      encryption: aws_s3.BucketEncryption.S3_MANAGED,
      publicReadAccess: true,
      enforceSSL: true,
      versioned: true,
    });
  }
}
