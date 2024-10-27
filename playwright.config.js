const config = {
    use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    },
    reporter: [
    ['list'],
    [
    'playwright-qase-reporter',
    {
    mode: 'testops',
    debug: false,
    testops: {
    api: {
    token: '', //Add your Token here.
    },
    project: 'DEMO', // Replace <DEMO> with your project code
    uploadAttachments: true,
    run: {
    complete: true,
    },
    },
    },
    ],
    ],
    };
    
    export default config;
    