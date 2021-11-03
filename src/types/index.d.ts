import { payments } from "bitcoinjs-lib";
import {
  BlockstreamAPITransactionResponse,
  BlockstreamAPIUtxoResponse,
  Vin,
  Vout,
} from "src/types/blockstream";

export * from "./blockstream";

export interface Address extends payments.Payment {
  derivationPath: string;
  masterFingerprint: Buffer;
  type?: "used" | "unused";
}

export interface DecoratedVin extends Vin {
  isMine: boolean;
  isChange: boolean;
}

export interface DecoratedVout extends Vout {
  isMine: boolean;
  isChange: boolean;
}

export interface DecoratedTx extends BlockstreamAPITransactionResponse {
  vin: DecoratedVin[];
  vout: DecoratedVout[];
  type: "sent" | "received" | "moved";
}

export interface DecoratedUtxo extends BlockstreamAPIUtxoResponse {
  address: Address;
  bip32Derivation: {
    masterFingerprint: Buffer;
    pubkey: Buffer;
    path: string;
  }[];
}
