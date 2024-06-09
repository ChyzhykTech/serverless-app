import { aws_apigateway } from "aws-cdk-lib";
import { Construct } from "constructs";

export class ApiGateway {
  constructor(scope: Construct) {
    new aws_apigateway.RestApi(scope, "RestApiGateway", {});
  }
}
