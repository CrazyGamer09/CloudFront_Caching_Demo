const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3')
const cloudfront = require('@aws-cdk/aws-cloudfront');
const origins = require('@aws-cdk/aws-cloudfront-origins');
const { Duration } = require('aws-cdk-lib');
class CloudFrontCustomCaching extends cdk.Stack{

    /**
     * 
     * @param {cdk.App} scope 
     * @param {String} id 
     * @param {cdk.StackProps} props 
     */
    constructor(scope,id,props){
        super(scope,id,props);

        const custom_policy = new cloudfront.CachePolicy(this, 'custom_cache_policy', {
            cachePolicyName : 'Custom_Policy',
            comment : 'This is a demo custom cache policy',
            // @ts-ignore
            defaultTtl : Duration.days(2),
            // @ts-ignore
            minTtl : Duration.minutes(1),
            // @ts-ignore
            maxTtl : Duration.minutes(1),
            cookieBehavior : cloudfront.CacheCookieBehavior.all(),
            headerBehavior : cloudfront.CacheHeaderBehavior.allowList('X-CustomHeader'),
            queryStringBehavior : cloudfront.CacheQueryStringBehavior.denyList('username')
            
        })
        
        //Creating new bucket as origin for our CloudFront distribution
        const bucket = new s3.Bucket(this, 'demo-cloudfront-custom-policy');

        //Creating CloudFront distribution with managed caching policy
        new cloudfront.Distribution(this, 'demo-cloudfront-with-custom-policies',{
        defaultBehavior :{
            origin: new origins.S3Origin(bucket),
            cachePolicy: custom_policy
            },
        })
    }
    

}
module.exports = { CloudFrontCustomCaching }