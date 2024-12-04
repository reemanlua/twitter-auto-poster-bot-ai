// By VishwaGauravIn (https://itsvg.in)
const { TwitterApi } = require("twitter-api-v2");
const { OpenAI } = require("openai");

// Debug: Print environment variables (without sensitive values)
console.log("Environment variables check:");
console.log("APP_KEY exists:", !!process.env.APP_KEY);
console.log("APP_SECRET exists:", !!process.env.APP_SECRET);
console.log("ACCESS_TOKEN exists:", !!process.env.ACCESS_TOKEN);
console.log("ACCESS_SECRET exists:", !!process.env.ACCESS_SECRET);
console.log("OPENAI_API_KEY exists:", !!process.env.OPENAI_API_KEY);

// Validate environment variables
if (!process.env.APP_KEY || !process.env.APP_SECRET || !process.env.ACCESS_TOKEN || !process.env.ACCESS_SECRET) {
    throw new Error("Missing required Twitter API credentials in environment variables");
}

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OpenAI API key in environment variables");
}

// Initialize Twitter client
const twitterClient = new TwitterApi({
    appKey: process.env.APP_KEY.trim(),
    appSecret: process.env.APP_SECRET.trim(),
    accessToken: process.env.ACCESS_TOKEN.trim(),
    accessSecret: process.env.ACCESS_SECRET.trim(),
});

// Initialize OpenAI with custom base URL
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY.trim(),
    baseURL: "https://newapi.ggb.today/v1"
});

async function run() {
    try {
        // Create chat completion with OpenAI
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: "generate a web development content, tips and tricks or something new or some rant or some advice as a tweet, it should not be vague and should be unique; under 280 characters and should be plain text, you can use emojis"
            }],
            max_tokens: 100,
            temperature: 0.7,
        });

        const text = completion.choices[0].message.content.trim();
        console.log("Generated tweet:", text);
        await sendTweet(text);
    } catch (error) {
        console.error("Error details:", {
            message: error.message,
            name: error.name,
            stack: error.stack,
            response: error.response?.data
        });
        process.exit(1);
    }
}

async function sendTweet(tweetText) {
    try {
        await twitterClient.v2.tweet(tweetText);
        console.log("Tweet sent successfully!");
    } catch (error) {
        console.error("Twitter API Error:", {
            message: error.message,
            name: error.name,
            stack: error.stack,
            response: error.response?.data
        });
        process.exit(1);
    }
}

// Run the bot
run();
