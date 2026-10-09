# Task API — Node.js Coding Test

A small Node.js Task API used as a **10-minute live coding exercise** for backend candidates.

## Quick start

```bash
npm start
```

Server runs at `http://localhost:3000`.

## Candidate brief

Give the candidate [`TODO.md`](./TODO.md). It contains the full task description, rules, and evaluation criteria.

## What’s already implemented

- In-memory task store with mock data
- `GET /tasks` returns tasks (filter not wired yet)
- `PATCH /tasks/:id/toggle` toggles completion
- `GET /health` health check
- CORS headers for local testing

## API

| Method | Path | Description |
| ------ | ---- | ----------- |
| `GET` | `/tasks?status=all\|active\|completed` | List tasks (candidate implements filtering) |
| `PATCH` | `/tasks/:id/toggle` | Toggle task completion |
| `GET` | `/health` | Health check |

## Stack

- Node.js 18+
- Built-in `http` module (no Express)

## Project structure

```text
src/
  data.js      # mock tasks
  tasks.js     # store + filterTasks stub
  server.js    # HTTP server
```

## Interviewer notes

- Time box: **10 minutes**
- Core task: implement `filterTasks` in `src/tasks.js` for **all / active / completed**
- Optional bonus: include a `count` in the list response
- Do not share a solution with the candidate before or during the exercise
