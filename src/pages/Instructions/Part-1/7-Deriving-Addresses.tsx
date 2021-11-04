/* eslint-disable react/jsx-no-comment-textnodes */
import { CodeBlock, Section } from "src/pages/Instructions/components";

export default function DerivingAddress() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Generating an address
      </h1>

      <div className="prose">
        <p>
          Now that we have our xpub, we can start generating addresses from it.
        </p>
        <p>
          In order to do this, we need to derive child public keys from the
          xpub. This is similar{" "}
        </p>

        {/* prettier-ignore */}
        <CodeBlock>
          const child = deriveChildPublicKey(xpub, derivationPath); {"\n"}
          {"\n"}
          const address = payments.p2wpkh(&#123; {"\n"}
            pubkey: child.publicKey, {"\n"}
            network: networks.bitcoin, {"\n"}
            &#125;); {"\n"}
          {"\n"}
          return address;
        </CodeBlock>
      </div>
    </Section>
  );
}
