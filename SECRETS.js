//? It is advisable to use environment variables instead of directly putting secrets in repository file but I have skipped this part as it would become complicated for many.
//? Alternatively you can download the repository instead or forking and upload it from your account and keep it private, in that way, your secrets will not be exposed to the public.

const APP_KEY = "0yhfGmjGgue5vj4SX6I7gd4YJ";
const APP_SECRET = "E1vc9pNxkcqdQQu5lECFhx7N95e5RXFXBw3rr2TYmaRhaqTmd6";
const ACCESS_TOKEN = "2189305257-ABCWEu7PPhFEyv6bWbowXQhMKxrGHIOUBphFiYx";
const ACCESS_SECRET = "tOIWXQfjad6FullkorEBKD6dogEXcV43MoFzaU61BpkJG";
const OPENAI_API_KEY = "sk-ZQCPS5QGRbsQmfh936Ac1a25698f46038675Ca156c6fBb18";

const SECRETS = {
  APP_KEY,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_SECRET,
  OPENAI_API_KEY,
};

module.exports = SECRETS;
