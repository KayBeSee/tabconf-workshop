import { BIP32Interface } from "bip32";
import { payments, Psbt } from "bitcoinjs-lib";

import { Address, DecoratedUtxo } from "src/types";

export const getNewMnemonic = (): string => {
  throw new Error("Function not implemented yet");
};

export const getMasterPrivateKey = async (
  mnemonic: string
): Promise<BIP32Interface> => {
  throw new Error("Function not implemented yet");
};

export const getXpubFromPrivateKey = (
  privateKey: BIP32Interface,
  derivationPath: string
): string => {
  throw new Error("Function not implemented yet");
};

export const deriveChildPublicKey = (
  xpub: string,
  derivationPath: string
): BIP32Interface => {
  throw new Error("Function not implemented yet");
};

export const getAddressFromChildPubkey = (
  child: BIP32Interface
): payments.Payment => {
  throw new Error("Function not implemented yet");
};

export const createTransasction = async (
  utxos: DecoratedUtxo[],
  recipientAddress: string,
  amountInSatoshis: number,
  changeAddress: Address
): Promise<Psbt> => {
  throw new Error("Function not implemented yet");
};

export const signTransaction = async (
  psbt: any,
  mnemonic: string
): Promise<Psbt> => {
  throw new Error("Function not implemented yet");
};
