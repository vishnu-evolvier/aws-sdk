Package.describe({
  name: 'vishnups:aws-sdk',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'AWS SDK for NodeJS - packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vishnu-evolvier/aws-sdk.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
    "aws-sdk": "2.132.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('AWS');
  api.mainModule('aws-sdk.js');
});
