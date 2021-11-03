import { generateMnemonic, mnemonicToSeed } from "bip39";
import { BIP32Interface, fromSeed } from "bip32";
import { payments, Psbt, bip32, networks } from "bitcoinjs-lib";

import { Address, DecoratedUtxo } from "src/types";

export const getNewMnemonic = (): string => {
  const mnemonic = generateMnemonic(256);
  return mnemonic;
};

export const getMasterPrivateKey = async (
  mnemonic: string
): Promise<BIP32Interface> => {
  const seed = await mnemonicToSeed(mnemonic);
  const privateKey = fromSeed(seed, networks.bitcoin);
  return privateKey;
};

export const getXpubFromPrivateKey = (
  privateKey: BIP32Interface,
  derivationPath: string
): string => {
  const child = privateKey.derivePath(derivationPath).neutered();
  const xpub = child.toBase58();
  return xpub;
};

export const deriveChildPublicKey = (
  xpub: string,
  derivationPath: string
): BIP32Interface => {
  const node = bip32.fromBase58(xpub, networks.bitcoin);
  const child = node.derivePath(derivationPath);
  return child;
};

export const getAddressFromChildPubkey = (
  child: bip32.BIP32Interface
): payments.Payment => {
  const address = payments.p2wpkh({
    pubkey: child.publicKey,
    network: networks.bitcoin,
  });
  return address;
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
