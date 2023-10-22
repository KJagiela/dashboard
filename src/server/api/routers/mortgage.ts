import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createMortgageEntry, fetchMortgage } from "../services/mortgage";


export const mortgageRouter = createTRPCRouter({
  fetchAll: publicProcedure
    .query(async () => {
      return await fetchMortgage();
    }),
    addNew: publicProcedure
    .mutation(() => {
      return createMortgageEntry();
    })
});
