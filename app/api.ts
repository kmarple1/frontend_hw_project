/**
 * Dummy API for connecting the ATM to a non-existent backend.
 */
import data from "./data.json";

export type UserEntry = {
  pin: string;
  card: string;
  name: string;
  balance: number;
};

const findUser = (pin: String, data: Array<UserEntry>) => data.find((d) => d.pin === pin);

export const getUser = (pin: String) => findUser(pin, data);
