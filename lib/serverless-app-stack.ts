import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { S3BucketConstruct } from "./constructs/s3-bucket";
import { ApiGatewayConstruct } from "./constructs/api-gateway";
import { aws_lambda, aws_lambda_nodejs } from "aws-cdk-lib";
import * as path from "node:path";

export class ServerlessAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const createLambdaFunction = new aws_lambda_nodejs.NodejsFunction(
      this,
      "createLambda",
      {
        handler: "handler",
        runtime: aws_lambda.Runtime.NODEJS_LATEST,
        entry: path.join(__dirname, "lambda/createFunction.ts"),
      },
    );

    new ApiGatewayConstruct(this, "ApiGateway", {
      createFunction: createLambdaFunction,
      // readFunction: () => {},
      // updateFunction: () => {},
      // deleteFunction: () => {},
    } as any);
    new S3BucketConstruct(this, "S3Bucket", { bucketName: "static-content" });
  }
}
