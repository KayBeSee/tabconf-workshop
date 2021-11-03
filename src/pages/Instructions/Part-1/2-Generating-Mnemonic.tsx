/* eslint-disable react/jsx-no-comment-textnodes */
import {
  CopyCommand,
  Section,
  CodeBlock,
} from "src/pages/Instructions/components";

export default function GeneratingMnemonic() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Generating a mnemonic
      </h1>
      <div className="prose">
        <p>
          Generating a mnemonic is simple with BitcoinJS. Simply install the{" "}
          <code>bip39</code> package using npm:
        </p>
        <CopyCommand command={"npm install bip39"} showCommandArrow={true} />

        <p>
          And then import it into your code and run the{" "}
          <code>generateMnemonic</code> function:
        </p>

        {/* prettier-ignore */}
        <CodeBlock>
            import &#123; generateMnemonic &#125; from "bip39" {"\n"}
            ... {"\n"}
            const mnemonic = generateMnemonic(256); {"\n"}
            {"\n"}
            console.log('output: ', mnemonic) {"\n"}
            // output: kitchen worry holiday skin cram work daring horror father pole dress focus window during image advance sleep enter clean usual expire actor rapid oppose{"\n"}
            {"\n"}
            return mnemonic;
        </CodeBlock>
      </div>
    </Section>
  );
}
