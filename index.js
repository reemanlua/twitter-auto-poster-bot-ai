// By VishwaGauravIn (https://itsvg.in)
const { TwitterApi } = require("twitter-api-v2");
const { OpenAI } = require("openai");
const SECRETS = require("./SECRETS");

// Initialize Twitter client
const twitterClient = new TwitterApi({
    appKey: SECRETS.APP_KEY,
    appSecret: SECRETS.APP_SECRET,
    accessToken: SECRETS.ACCESS_TOKEN,
    accessSecret: SECRETS.ACCESS_SECRET,
});

// Initialize OpenAI with custom base URL
const openai = new OpenAI({
    apiKey: SECRETS.OPENAI_API_KEY,
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
