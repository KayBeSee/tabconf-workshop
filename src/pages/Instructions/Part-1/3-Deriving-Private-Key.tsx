/* eslint-disable react/jsx-no-comment-textnodes */
import {
  CopyCommand,
  Section,
  CodeBlock,
} from "src/pages/Instructions/components";

export default function DerivingPrivateKey() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Deriving a private key
      </h1>

      <div className="prose">
        <p>
          Once you have generated a new mnemonic, you have to convert it into a
          seed in order to derive a private key.
        </p>
        <p>
          To do this, we need to install the <code>bip32</code> npm package:
        </p>
        <CopyCommand command={"npm install bip32"} showCommandArrow={true} />

        {/* prettier-ignore */}
        <CodeBlock>
            import &#123; fromSeed &#125; from 'bip32'; {"\n"}
            import &#123; networks &#125; from 'bitcoinjs-lib'; {"\n"}
            import &#123; mnemonicToSeed &#125; from 'bip39'; {"\n"}
            ... {"\n"}
            const seed = await mnemonicToSeed(mnemonic); {"\n"}
            const privateKey = fromSeed(seed, networks.bitcoin); {"\n"}
            {"\n"}
            console.log(privateKey.toBase58()); {"\n"}
            // xprv9s21ZrQH143K3fyh9nwMnoCjCnqpcrqkNWcy3NUDAyi32qmQBZJ2Zw856N7ruBr4dbCwqHYjozuryVKHQfox4XzVescETg6Uqwa1dCxExWx {"\n"}
            {"\n"}
            return privateKey;
          </CodeBlock>
      </div>
    </Section>
  );
}
