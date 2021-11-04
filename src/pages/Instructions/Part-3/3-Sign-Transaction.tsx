import { CodeBlock, atomOneDark } from "react-code-blocks";

import { Section } from "src/pages/Instructions/components";

const code = `
export const signTransaction = async (psbt: Psbt, mnemonic: string) => {
  const seed = await mnemonicToSeed(mnemonic);
  const root = bip32.fromSeed(seed, networks.bitcoin);

  psbt.signAllInputsHD(root);
  psbt.finalizeAllInputs();
  return psbt;
};
`;

export default function Part3SignTransaction() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Signing a transaction
      </h1>
      <div className="prose">
        <p>
          Now that we have created our transaction, we can now sign it using our
          mnemonic.
        </p>

        <p>
          After signing it, we finalize all of the inputs on the PSBT and then
          return it for displaying in our UI
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
