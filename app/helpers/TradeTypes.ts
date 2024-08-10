import { StaticImageData } from "next/image";

export type TradeItem = {
  _id: string;
  currency: string;
  price: number;
  exit_currency: string;
  available_amount: number;
  minimum_bid: number;
  amount: number;
  sold: number;
  payment_method?: string;
};

export type CurrencyImages = {
  [key: string]: StaticImageData;
};
