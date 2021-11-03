/* eslint-disable react/jsx-no-comment-textnodes */
import { Section, CodeBlock } from "src/pages/Instructions/components";

export default function DerivingXpub() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Generating an Extended Public Key (xpub)
      </h1>

      <div className="prose">
        <p>
          Once you have generated a private, derive a extended public key (xpub)
          from it using an appropriate derivation path.
        </p>

        {/* prettier-ignore */}
        <CodeBlock>
            import * as bip32 from 'bip32'; {"\n"}
            import &#123; networks &#125; from 'bitcoinjs-lib'; {"\n"}
            import &#123; mnemonicToSeed &#125; from 'bip39'; {"\n"}
            ... {"\n"}
            const derivationPath = "m/84'/0'/0'"; // P2WPKH {"\n"}
            const child = privateKey.derivePath(derivationPath).neutered(); {"\n"}
            const xpub = child.toBase58(); {"\n"}
            {"\n"}
            console.log(xpub); {"\n"}
            // xpub6Cw6ywDV5U4MxYUGQzEqjacRKBog2EBtaMPbYuE4iSsqPoTmKg7JZojNh74E52iVFYDVEJ2qN3AAvmyg1zZn3kKykbKrCydkBMxL5bLr5pp
          </CodeBlock>
      </div>
    </Section>
  );
}
