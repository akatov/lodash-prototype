module.exports = function(karma) {
    karma.set({
        basePath: '',
        frameworks: ['mocha'],
        files: ['bower_components/expect/expect.js',
                'bower_components/lodash/lodash.js',
                'lodash-prototype.js', 'test.js'],
        reporters: ['progress', 'growl'],
        port: 9876,
        runnerPort: 9100,
        colors: true,
        logLevel: karma.LOG_DEBUG,
        autoWatch: true,
        // browsers: ['Chrome', 'ChromeCanary', 'Firefox', 'Opera', 'Safari', 'PhantomJS' ],
        browsers: ['Chrome' ],
        captureTimeout: 60000,
        singleRun: false
    });
};
