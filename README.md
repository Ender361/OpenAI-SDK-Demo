# OpenAI SDK Demo

A minimal demo repo for showing how to use the OpenAI SDK in Node.js, designed for live presentations and easy audience participation.

## Features
- One script: `index.js`
- One config file: `.env`
- Mock mode for free, safe demos (no API key needed)
- Real mode for actual OpenAI API calls

## Setup

1. **Clone the repo**
   ```bash
   git clone <your-repo-url>
   cd openai-sdk-demo
   npm install
   ```

2. **Create your .env file**
   ```bash
   cp .env.example .env
   # or just create .env manually
   ```

3. **Choose your mode**
   - **Mock mode (default, no API key needed):**
     - In your `.env` file, set:
       ```
       MOCK_MODE=true
       ```
     - You can leave `OPENAI_API_KEY` blank or as a placeholder.
   - **Real mode (requires OpenAI API key and billing):**
     - In your `.env` file, set:
       ```
       MOCK_MODE=false
       OPENAI_API_KEY=sk-...your real key...
       ```

## Usage

Run the script:
```bash
node index.js
```

- In mock mode, you’ll see a simulated response (no cost, no key needed).
- In real mode, you’ll get a real answer from OpenAI (API key and billing required).

## Best Practices
- Never commit your real `.env` file or API key.
- Only share `.env.example` for setup instructions.
- Use mock mode for demos and workshops to avoid cost and risk.

---

**Enjoy your presentation!**
