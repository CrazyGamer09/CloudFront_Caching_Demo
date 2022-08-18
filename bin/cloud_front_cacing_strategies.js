#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { CloudFrontCacingStrategiesStack } = require('../lib/cloud_front_cacing_strategies-stack');

const app = new cdk.App();
new CloudFrontCacingStrategiesStack(app, 'CloudFrontCacingStrategiesStack');
