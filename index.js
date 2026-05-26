
import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

// Toggle mock mode with an environment variable
const MOCK_MODE = process.env.MOCK_MODE === "true";

async function getOpenAIResponse(question) {
  if (MOCK_MODE) {
    // Mock response for when not using real key
    return {
      output_text: `This is a mock response to: "${question}"\n\n(If this were live, you'd see a real answer from OpenAI here!)`
    };
  } else {
    // OpenAI SDK usage
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    // Without the SDK this would be much more complicated and require API fetches
    return await client.responses.create({
      model: "gpt-5",
      input: question,
    });
  }
}

// For getting user input in node terminal
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const rl = readline.createInterface({ input, output });
  const question = await rl.question("Ask the magic AI something: ");
  rl.close();

  const response = await getOpenAIResponse(question);

  console.log("\nQuestion:");
  console.log(question);
  console.log("\nAnswer:");
  console.log(response.output_text);
}

main();
