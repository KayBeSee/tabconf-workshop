import { generateMnemonic, mnemonicToSeed } from "bip39";
import { BIP32Interface, fromSeed } from "bip32";
import { payments, Psbt, bip32, networks } from "bitcoinjs-lib";
import coinselect from "coinselect";

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
) => {
  // const feeRate = await getFeeRates();

  const { inputs, outputs, fee } = coinselect(
    utxos,
    [
      {
        address: recipientAddress,
        value: amountInSatoshis,
      },
    ],
    1
  );

  if (!inputs || !outputs) throw new Error("Unable to construct transaction");
  if (fee > amountInSatoshis) throw new Error("Fee is too high!");

  const psbt = new Psbt({ network: networks.bitcoin });
  psbt.setVersion(2); // These are defaults. This line is not needed.
  psbt.setLocktime(0); // These are defaults. This line is not needed.

  inputs.forEach((input) => {
    psbt.addInput({
      hash: input.txid,
      index: input.vout,
      sequence: 0xfffffffd, // enables RBF
      witnessUtxo: {
        value: input.value,
        script: input.address.output!,
      },
      bip32Derivation: input.bip32Derivation,
    });
  });

  outputs.forEach((output) => {
    // coinselect doesnt apply address to change output, so add it here
    if (!output.address) {
      output.address = changeAddress.address!;
    }

    psbt.addOutput({
      address: output.address,
      value: output.value,
    });
  });

  return psbt;
};

export const signTransaction = async (
  psbt: Psbt,
  mnemonic: string
): Promise<Psbt> => {
  const seed = await mnemonicToSeed(mnemonic);
  const root = bip32.fromSeed(seed, networks.bitcoin);

  psbt.signAllInputsHD(root);
  psbt.validateSignaturesOfAllInputs();
  psbt.finalizeAllInputs();
  return psbt;
};
