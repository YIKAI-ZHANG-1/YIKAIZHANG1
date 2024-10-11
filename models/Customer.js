import { Interests } from "@mui/icons-material";
import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Brith: { type: Date, required: true },
  Member : { type: Number, required: false },
  Interests: { type: string, required: true },
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "category" 
  },
});

const Customer = mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);

export default Customer;