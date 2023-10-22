import mongoose, {model, Schema} from "mongoose";

interface IMortgage {
  fullAmount: number;
  amountLeft: number;
  date: Date;
  interests: number;
  capital: number;
}

const mortgageSchema = new Schema<IMortgage>({
  fullAmount: {
    type: Number,
    required: true,
  },
  amountLeft: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  interests: {
    type: Number,
    required: true,
  },
  capital: {
    type: Number,
    required: true,
  },
});

const mortgageModel = () => {
  return mongoose.models && mongoose.models.mortgage ?
    mongoose.models.mortgage :
  model<IMortgage>("mortgage", mortgageSchema);
}
export default mortgageModel;