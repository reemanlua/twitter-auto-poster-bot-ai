// By VishwaGauravIn (https://itsvg.in)
const { TwitterApi } = require("twitter-api-v2");
const { OpenAI } = require("openai");

// Initialize Twitter client
const twitterClient = new TwitterApi({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
});

// Initialize OpenAI with custom base URL
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
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
        console.error("Error generating content:", error.message);
        if (error.response) {
            console.error("API response:", error.response.data);
        }
        // 添加堆栈跟踪以便调试
        console.error("Stack trace:", error.stack);
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
