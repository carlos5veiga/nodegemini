const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

main();

async function main() {
    const result = await chamada();
    console.log(result.response.text());
}

async function chamada() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Explique o que é chain of thougths";
    return model.generateContent(prompt);
}
