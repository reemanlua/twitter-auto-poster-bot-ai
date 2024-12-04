// By VishwaGauravIn (https://itsvg.in), modified for OpenAI API
const { Configuration, OpenAIApi } = require("openai");
const { TwitterApi } = require("twitter-api-v2");
const SECRETS = require("./SECRETS");

// Initialize Twitter client
const twitterClient = new TwitterApi({
    appKey: SECRETS.APP_KEY,
    appSecret: SECRETS.APP_SECRET,
    accessToken: SECRETS.ACCESS_TOKEN,
    accessSecret: SECRETS.ACCESS_SECRET,
});

// Initialize OpenAI configuration with custom base URL
const configuration = new Configuration({
    apiKey: SECRETS.OPENAI_API_KEY,
    basePath: "https://newapi.ggb.today/v1"  // Custom base URL
});
const openai = new OpenAIApi(configuration);

async function run() {
    try {
        // Create completion with OpenAI API
        const completion = await openai.createChatCompletion({
            model: "gpt-4o",  // Or your preferred model
            messages: [{
                role: "user",
                content: "generate a web development content, tips and tricks or something new or some rant or some advice as a tweet, it should not be vague and should be unique; under 280 characters and should be plain text, you can use emojis"
            }],
            max_tokens: 100,  // Adjust as needed for tweet length
            temperature: 0.7,
        });

        const text = completion.data.choices[0].message.content.trim();
        console.log(text);
        await sendTweet(text);
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

async function sendTweet(tweetText) {
    try {
        await twitterClient.v2.tweet(tweetText);
        console.log("Tweet sent successfully!");
    } catch (error) {
        console.error("Error sending tweet:", error);
    }
}

// Run the bot
run();
