declare module "coinselect" {
  import { DecoratedUtxo } from ".";
  interface Output {
    address: string;
    value: number;
  }

  interface CoinSelectResponse<T> {
    inputs: T[];
    outputs: Output[];
    fee: number;
  }

  declare function coinselect<T>(
    utxos: T[],
    outputs: Output[],
    feeRate: number
  ): CoinSelectResponse<T>;

  export default coinselect;
}
