
export const BASE_URL_STAGING = "http://64.225.43.177:2505/graphql/";
export const BASE_URL_PRODUCTION = "https://bluefeets.com/graphql";

export function getBaseUrl() {
  return (__DEV__ ? BASE_URL_STAGING  : BASE_URL_PRODUCTION ) + "/";
}


