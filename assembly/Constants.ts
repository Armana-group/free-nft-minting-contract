import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Free NFT";
  export const SYMBOL: string = "FREENFT";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = u64.MAX_VALUE;
  export const URI: string = "";
  export const OWNER: Uint8Array = Base58.decode("");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}