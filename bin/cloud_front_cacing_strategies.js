#!/usr/bin/env node
const cdk = require('@aws-cdk/core');
const { CloudFrontCacingStrategiesStack } = require('../lib/cloud_front_cacing_strategies-stack');
const { CloudFrontCustomCaching } = require('../lib/cloud_front_custom_cache');

const app = new cdk.App();
new CloudFrontCacingStrategiesStack(app, 'CloudFrontCacingStrategiesStack');

new CloudFrontCustomCaching(app, 'CloudFrontCustomCaching');
