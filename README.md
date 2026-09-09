# Mohamed Thaha — Professional Profile

Phase 1 personal professional profile website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Use the default Next.js settings.
4. Deploy.

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Content updates

- Profile and site content: `lib/profile.ts`
- Career timeline and experience: `lib/experience.ts`
- Resume PDF: replace `public/resume/Mohamed_Thaha_Master_Executive_Resume.pdf`

## Notes

- LinkedIn URL is a placeholder (`#`) in `lib/profile.ts` until the real profile link is available.
- The included resume PDF is a placeholder. Replace it with the executive resume file before production launch.
