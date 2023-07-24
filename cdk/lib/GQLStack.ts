import { App, CfnOutput, Duration, Stack, StackProps } from "aws-cdk-lib";
import { Cors, LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Architecture } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from 'path';

export class GQLStack extends Stack {
    constructor(app: App, id: string, props: StackProps) {
        super(app, id, props)
        const lambda = new NodejsFunction(this, 'apollo-lambda', {
            handler: 'handler',
            architecture: Architecture.ARM_64,
            memorySize: 128,
            timeout: Duration.seconds(10),
            entry: path.join(__dirname, '/../../graphql/src/index.ts'),
            environment: {
                DB_PASSWORD: process.env.DB_PASSWORD ?? 'Thi is not a password'
            }
        })

        const api = new RestApi(this, 'restapi', {
            defaultCorsPreflightOptions: {
                allowHeaders: Cors.DEFAULT_HEADERS,
                allowOrigins: Cors.ALL_ORIGINS,
                allowMethods: Cors.ALL_METHODS
            },
            restApiName: 'yourChords-API'
        })

        api.root.addMethod('POST', new LambdaIntegration(lambda))

        new CfnOutput(this, 'restapi-endpoint', {
            value: api.url
        })
    }
}