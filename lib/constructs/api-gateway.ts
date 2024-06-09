import {aws_apigateway, aws_lambda_nodejs, Stack} from "aws-cdk-lib";
import { Construct } from "constructs";

export interface ApiGatewayConstructProps {
  createFunction: aws_lambda_nodejs.NodejsFunction;
  readFunction: aws_lambda_nodejs.NodejsFunction;
  updateFunction: aws_lambda_nodejs.NodejsFunction;
  deleteFunction: aws_lambda_nodejs.NodejsFunction;
}

export class ApiGatewayConstruct extends Construct {
  constructor(scope: Stack, id: string, props: ApiGatewayConstructProps) {
    super(scope, id);

    const restApi = new aws_apigateway.RestApi(scope, "LambdaRestApi", {
      restApiName: "Lambda handler",
    });

    // restApi.root.addMethod("GET", new aws_apigateway.LambdaIntegration(props.readFunction));
    restApi.root.addMethod("POST", new aws_apigateway.LambdaIntegration(props.createFunction));
    // restApi.root.addMethod("PUT", new aws_apigateway.LambdaIntegration(props.updateFunction));
    // restApi.root.addMethod("DELETE", new aws_apigateway.LambdaIntegration(props.deleteFunction));
  }
}
