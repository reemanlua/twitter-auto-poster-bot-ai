//? It is advisable to use environment variables instead of directly putting secrets in repository file but I have skipped this part as it would become complicated for many.
//? Alternatively you can download the repository instead or forking and upload it from your account and keep it private, in that way, your secrets will not be exposed to the public.

const APP_KEY = "PU3mCSIKvXJOY4zsJHjJcQOWd";
const APP_SECRET = "EoiNRUvvkbdp51AD2NJXNDcF0tzA3FxyvwMpC9QDmF5aaKBKhh";
const ACCESS_TOKEN = "2167734808-IaKH7qbVid06QqTqGT1KcBXAKHzcz0adPUckVi5";
const ACCESS_SECRET = "cZZFgMiyaPpFAxVO9AlFdBX0UcrCEDYxPI83LICgDZJhq";
const OPENAI_API_KEY = "sk-ZQCPS5QGRbsQmfh936Ac1a25698f46038675Ca156c6fBb18";

const SECRETS = {
  APP_KEY,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_SECRET,
  OPENAI_API_KEY,
};

module.exports = SECRETS;
