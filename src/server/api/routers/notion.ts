import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { completeTask, fetchTopPriorityTask } from "~/server/api/services/notion";

export const notionRouter = createTRPCRouter({
  topPriority: publicProcedure
    .query(async () => {
      return await fetchTopPriorityTask();
    }),
    complete: publicProcedure
    .input(z.string())
    .mutation(({ input }) => {
      return completeTask(input);
    })
});
