# Quizcomp — AI-powered competitive quizzes

Welcome to Quizcomp, a small web app that uses AI to generate multiple-choice quizzes. A host creates a quiz (topic + difficulty), shares a short room code with friends, and players join to compete. Players answer questions at their own pace and receive immediate feedback and per-question explanations.

How the game works
- Host: Creates a quiz and receives a 6-character room code to share.
- Players: Join with a display name and the room code. Each player advances their own view with a Next button — the host does not need to control other players' progress.
- Scoring: Correct answers award up to 1000 points depending on speed (the faster you answer within the time limit, the more points). Incorrect answers earn 0 points.

Developer quick start
1. Install dependencies:
   npm install
2. Provide your AI API key (check `services/geminiService.ts` for environment variable name).
3. Run the dev server:
   npm run dev

Notes
- This repository currently simulates multiplayer using browser localStorage + storage events (works across tabs in the same browser/profile only). For multi-device real-time play you should integrate a backend or a real-time service (Socket.IO, Firebase, etc.).
- AI-generated content requires a valid API key and may incur usage costs.

If you'd like, I can help add a real-time backend or tweak scoring/UX.
