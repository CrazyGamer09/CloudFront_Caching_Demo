const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');
const cloudfront = require('@aws-cdk/aws-cloudfront')
const origins = require('@aws-cdk/aws-cloudfront-origins')
class CloudFrontCacingStrategiesStack extends cdk.Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    //Creating new bucket as origin for our CloudFront distribution
    const bucket = new s3.Bucket(this, 'demo-cloudfront-managed-policy');

    //Creating CloudFront distribution with managed caching policy
    new cloudfront.Distribution(this, 'demo-cloudfront-with-managed-policies',{
      defaultBehavior :{
        origin: new origins.S3Origin(bucket),
        cachePolicy:cloudfront.CachePolicy.CACHING_OPTIMIZED
      },
    })
  }
}

module.exports = { CloudFrontCacingStrategiesStack }
