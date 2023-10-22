import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { notionRouter } from "./routers/notion";
import { mortgageRouter } from "./routers/mortgage";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  notion: notionRouter,
  mortgage: mortgageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
