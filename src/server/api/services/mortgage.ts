import mortgageModel from "~/server/db/mortgage.model";

export async function fetchMortgage() {
  const client = await clientPromise;
  const db = client.db(env.DB_NAME);
  const mortgageCollection = db.collection("mortgage")
  const mortgage = await mortgageModel().findOne();
  return mortgage;
}

export async function createMortgageEntry() {
  const mortgage = await mortgageModel().create({ 
    fullAmount: 1000,
    amountLeft: 900,
    date: new Date(2023, 1, 1),
    interests: 10,
    capital: 90,
  });
  return mortgage;
}