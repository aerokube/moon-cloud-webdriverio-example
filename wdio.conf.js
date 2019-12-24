exports.config = {
    runner: 'local',
    protocol: 'https',
    hostname: 'browsers.aerokube.com',
    port: 4444,
    user: '', // Username
    key: '', // Password
    specs: [
        'tests/**/*js'
    ],
    maxInstances: 1,
    capabilities: [
      {browserName: 'chrome', browserVersion: '78.0',
        "selenoid:options": { "enableVNC": true }
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
