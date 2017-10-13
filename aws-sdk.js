// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See aws-sdk-tests.js for an example of importing.
AWS = Npm.require('aws-sdk');

var awsAccessKey = process.env.AWS_ACCESS_KEY_ID;
var awsSecretKey = process.env.AWS_SECRET_ACCESS_KEY;

if (!awsAccessKey || !awsSecretKey) {
    awsAccessKey = Meteor.settings.private.aws.accessKeyId;
    awsSecretKey = Meteor.settings.private.aws.secretAccessKey;
    if (awsAccessKey && awsSecretKey) {
        if (awsAccessKey) process.env.AWS_ACCESS_KEY_ID = awsAccessKey;
        if (awsSecretKey) process.env.AWS_SECRET_ACCESS_KEY = awsSecretKey;
    }
    else {
        throw new Meteor.Error(404, 'Please add your AWS access key id & secret access key');
    }
}
