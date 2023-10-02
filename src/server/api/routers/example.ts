import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {fetchTopPriorityTask} from "~/server/api/services/notion";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.example.findMany();
  }),
});
