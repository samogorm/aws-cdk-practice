import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  Function as LambdaFunction,
  Runtime,
  Code,
} from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { ITable as IDynamoDBTable } from "aws-cdk-lib/aws-dynamodb";

interface LambdaStackProps extends StackProps {
  spacesTable: IDynamoDBTable;
}

export class LambdaStack extends Stack {
  public readonly helloLambdaIntegration: LambdaIntegration;

  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    const helloLambda = new LambdaFunction(this, "HelloLambda", {
      runtime: Runtime.NODEJS_16_X,
      handler: "hello.main",
      code: Code.fromAsset(join(__dirname, "..", "..", "services")),
      environment: {
        TABLE_NAME: props.spacesTable.tableName,
      },
    });

    this.helloLambdaIntegration = new LambdaIntegration(helloLambda);
  }
}
