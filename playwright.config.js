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
    token: '7663fe1d88b58f91a37f4370727ff222235304744153d958e6afbd6810ffbcec',
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
    