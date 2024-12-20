//? It is advisable to use environment variables instead of directly putting secrets in repository file but I have skipped this part as it would become complicated for many.
//? Alternatively you can download the repository instead or forking and upload it from your account and keep it private, in that way, your secrets will not be exposed to the public.

const APP_KEY = "8txHkiVBtcmFYMGpdccRVyux5";
const APP_SECRET = "JqaOIk0nXU3FnGmMY0EfROe6YcaZC43Q52fhmXX5enqc1OyjdD";
const ACCESS_TOKEN = "2167734808-AAov7rMFsDwk8aIKHhDI24xoyRzpxhEfnW5dFcF";
const ACCESS_SECRET = "ywABXhwAqHBifdyuXD9ZHZIIYFoHEJvWed2OFSfqrIZRX";
const OPENAI_API_KEY = "sk-ZQCPS5QGRbsQmfh936Ac1a25698f46038675Ca156c6fBb18";

const SECRETS = {
  APP_KEY,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_SECRET,
  OPENAI_API_KEY,
};

module.exports = SECRETS;
