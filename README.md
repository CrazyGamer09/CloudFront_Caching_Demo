# Welcome to your CDK JavaScript project

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CloudFrontCacingStrategiesStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

## Useful commands
* `cdk deploy`           deploy this stack to your default AWS account/region
* `cdk diff`             compare deployed stack with current state
* `cdk synth`            emits the synthesized CloudFormation template

## For Biginners
* `cdk init --language javascript`        To initialize your cdk project with javascript
* `npm i @aws-cdk/core`                   To install @aws-cdk/core
* `npm i @aws-cdk/aws-s3`                 To install @aws-cdk/aws-s3 for S3 module.
* `npm i @aws-cdk/aws-cloudfront`         To install @aws-cdk/aws-cloudfront for cloudFront module
* `npm i @aws-cdk/aws-cloudfront-origins` To install @aws-cdk/aws-cloudfront-origins for cloudfront-origins module 
