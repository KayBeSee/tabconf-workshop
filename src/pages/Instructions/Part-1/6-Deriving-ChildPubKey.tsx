/* eslint-disable react/jsx-no-comment-textnodes */
import { Section, CodeBlock } from "src/pages/Instructions/components";

export default function DerivingChildPubKey() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Deriving child public keys
      </h1>

      <div className="prose">
        <p>
          Once we have our xpub, we can derive child public keys from it to get
          our addresses.
        </p>

        {/* prettier-ignore */}
        <CodeBlock>
        const node = bip32.fromBase58(xpub, networks.bitcoin); {"\n"}
        const child = node.derivePath(derivationPath); {"\n"}
        return child;
          </CodeBlock>
      </div>
    </Section>
  );
}
