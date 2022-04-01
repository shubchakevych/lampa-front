let BASE_URL;

switch (process.env.REACT_APP_ENV) {
    case "dev":
        BASE_URL = process.env.REACT_APP_DEV_URL;
        break;
    case "prod":
        BASE_URL = process.env.REACT_APP_PROD_URL;
        break;
    default:
        BASE_URL = process.env.REACT_APP_DEV_URL;
        break;
}

export { BASE_URL };
