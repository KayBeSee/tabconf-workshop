import { CodeBlock, atomOneDark } from "react-code-blocks";

import { Section } from "src/pages/Instructions/components";

const code = `
export const createTransasction = async (
  utxos: DecoratedUtxo[],
  recipientAddress: string,
  amountInSatoshis: number,
  changeAddress: Address
) => {
  const feeRate = await getFeeRates();

  const { inputs, outputs, fee } = coinselect(
    utxos,
    [
      {
        address: recipientAddress,
        value: amountInSatoshis,
      },
    ],
    feeRate["1"]
  );

  if (!inputs || !outputs) throw new Error("Unable to construct transaction");

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
`;

export default function Part2CreateTransaction() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Create transaction
      </h1>
      <div className="prose">
        <p>
          In order to create a transaction, we are going to write a function
          that takes the UTXOs we got in Part 2, an address to send coins to
          (recipientAddress), an amount of satoshis to send, and a change
          address to send back any change.
        </p>

        <p>
          First we are going to use the <code>coinselect</code> package to
          select the correct inputs to use in our transaction.
        </p>

        <p>
          After we have run coinselect, we create a new PSBT, and add our inputs
          and outputs to it. We also add our change address to the output that
          coinselect created without an address.
        </p>

        <CodeBlock
          text={code}
          showLineNumbers={true}
          language="typescript"
          theme={atomOneDark}
        />
      </div>
    </Section>
  );
}
