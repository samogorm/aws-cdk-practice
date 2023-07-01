import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

interface IApiStackProps extends StackProps {
  helloLambdaIntegration: LambdaIntegration;
}

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props: IApiStackProps) {
    super(scope, id, props);

    const api = new RestApi(this, "SpacesApi");
    const spacesResource = api.root.addResource("spaces");
    spacesResource.addMethod("GET", props.helloLambdaIntegration);
  }
}
