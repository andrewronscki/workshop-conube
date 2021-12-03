import { Items } from './items';

export type Message = {
  customerId: string;
  items: Items[];
};
