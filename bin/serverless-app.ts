#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ServerlessAppStack } from "../lib/serverless-app-stack";

const app = new cdk.App();

new ServerlessAppStack(app);
