# SmartRetailX - Personalized Retail Platform

SmartRetailX is a React + TypeScript + Vite frontend showcase for an AI-driven retail ecosystem.
It presents four core modules through an interactive single-page experience:

1. Sinhala Voice Assistant
2. Customer Segmentation
3. BI Dashboard (Predictive Analytics)
4. Personalized Promotion Engine

## Tech Stack

- React 19
- TypeScript
- Vite 6
- React Router DOM 7
- Tailwind CSS 4
- Motion (animations)
- Recharts (data visualization)
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20 recommended)
- npm or pnpm

### Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

### Run development server

```bash
npm run dev
```

The app runs on http://localhost:3000 by default.

## Available Scripts

- `npm run dev` - Start Vite dev server (`--port=3000 --host=0.0.0.0`)
- `npm run build` - Build production assets
- `npm run preview` - Preview production build locally
- `npm run lint` - Type-check (`tsc --noEmit`)
- `npm run clean` - Remove build output (`dist`)

## App Routes

- `/` - Platform overview
- `/voice` - Sinhala Voice Assistant module
- `/segmentation` - Customer segmentation module
- `/analytics` - BI dashboard and forecasting module
- `/promotions` - Personalized promotion engine module

## Project Structure

```text
src/
   App.tsx
   main.tsx
   index.css
   lib/
      utils.ts
   pages/
      Home.tsx
      VoiceAssistant.tsx
      Segmentation.tsx
      BIDashboard.tsx
      PromotionEngine.tsx
```

## Configuration Notes

- No `.env.local` or API key is required to run the current frontend demo.
- The repository currently contains the UI showcase and static/sample visualization data.

## Build and Preview

```bash
npm run build
npm run preview
```
