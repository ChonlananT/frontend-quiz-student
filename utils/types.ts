import * as z from "zod";

const formSchema = z.object({
  id: z.string().min(1,{message: "missing ID"}), 
  firstName: z.string().min(1,{message: "missing Firstname"}),
  lastName: z.string().min(1,{message: "missing lastName"}),
  email: z.string().email({message:"invalid email input"}),
  amount: z.number().min(1,{message:"missing Amount"}),
  time: z.string().min(1,{message:"missing time"}),
});

export const formsSchema = z.array(formSchema);
export type Form = z.infer<typeof formSchema>;
