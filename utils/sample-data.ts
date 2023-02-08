import { User, Materials } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

export const sampleMaterialsData: Materials[] = [
  {
    id: 1,
    color: "green",
    name: "Sand",
    volume: 1000,
    cost: 200,
    date: 111111,
  },
  {
    id: 2,
    color: "green",
    name: "Sand",
    volume: 1000,
    cost: 200,
    date: 111111,
  },
];
