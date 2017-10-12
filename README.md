AWS SDK for Meteor
===============

Get started quickly using AWS with the AWS SDK for JavaScript in Node.js. The SDK helps take the complexity out of coding by providing JavaScript objects for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF. The single, downloadable package includes the AWS JavaScript Library and documentation.

Adding this package to your [Meteor](http://www.meteor.com/) application adds `AWS` object into the global scope on server, which you can then use [according to the documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/frames.html).

##Install
```bach
meteor add vishnups:aws-sdk
```

## Usage
Add AWS accessKeyId & secretAccessKey to your settings.json or `METEOR_SETTINGS` env variable containing all settings as JSON

```json
{
    "private": {
        "aws": {
            "accessKeyId": "YOUR_AWS_ACCESS_KEY",
            "secretAccessKey": "YOUR_AWS_SECRET_ACCESS_KEY"
        }
    }
}
```

You can also use environment varialbes: `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY` instead of `METEOR_SETTINGS`.

