export default {
    s3: {
        REGION: "us-west-1",
        BUCKET: "haiders-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://gr87tykgjk.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_BEZGE1Q0b",
        APP_CLIENT_ID: "5tcc68905snnb0vl593okjh7as",
        IDENTITY_POOL_ID: "us-east-2:92b60f1a-56bf-4f24-9a00-3e1ff250e086"
    },
    STRIPE_KEY: "pk_test_f7guhbLXxDOhDEQRdm3sbWD2009YqbDYOs",
    MAX_ATTACHMENT_SIZE: 5000000
};