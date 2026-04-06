# HumanBeam test task

A two-screen onboarding flow that collects information from a user, generates a persona system prompt via an LLM, and creates a persona in Tavus.

## Prerequisites

- Node.js 18+
- An OpenAI API key
- A Tavus API key

## Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Copy the example environment file and fill in your API keys:

```bash
cp .env.example .env
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Environment Variables

| Variable              | Description                                               |
| --------------------- | --------------------------------------------------------- |
| `VITE_OPENAI_API_KEY` | OpenAI API key used to generate the persona system prompt |
| `VITE_TAVUS_API_KEY`  | Tavus API key used to create the persona                  |

![Screenshot](public/screenshot.png)
