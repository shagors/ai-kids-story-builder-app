import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-kids-story_owner:McJE7dpOVjl6@ep-wandering-resonance-a53h4w9u.us-east-2.aws.neon.tech/ai-kids-story?sslmode=require",
  },
  verbose: true,
  strict: true,
});
