/* eslint-disable react/jsx-no-comment-textnodes */
import { Section } from "src/pages/Instructions/components";

export default function StorePrivateKey() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Store private key fingerprint
      </h1>

      <div className="prose">
        <p>
          The first 32 bits of the identifier are called the key fingerprint.
        </p>

        <p>
          This is important to make both a derived public and a derived private
          key having the same fingerprint so you can relate them to each other.
        </p>

        <p>We will use this later on when signing a transaction</p>

        <p>
          Further reading:{" "}
          <a
            href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#key-identifiers"
            target="_blank"
            rel="noreferrer"
          >
            Key identifiers in BIP32
          </a>
        </p>
      </div>
    </Section>
  );
}
