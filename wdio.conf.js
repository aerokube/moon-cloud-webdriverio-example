exports.config = {
    runner: 'local',
    protocol: 'https',
    hostname: 'my-cluster.cloud.aerokube.com',
    path: '/wd/hub',
    port: 443,
    user: 'test', // Username
    key: 'test-password', // Password
    specs: [
        'tests/**/*js'
    ],
    maxInstances: 1,
    capabilities: [
      {browserName: 'chrome', browserVersion: '91.0',
        "moon:options": {
            "enableVNC": true,
            "sessionTimeout": "2m"
        }
      }
    ],
    logLevel: 'debug',
    framework: 'mocha',
    reporters: ['dot','spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
