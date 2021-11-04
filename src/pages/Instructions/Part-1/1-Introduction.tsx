import { Section } from "src/pages/Instructions/components";

export default function GeneratingMnemonic() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">Introduction</h1>
      <div className="prose">
        <p>
          Your bitcoin is secured by what is called a seed phrase. If you have
          ever interacted with a bitcoin hardware wallet, you were instructed to
          write down a group of 24 words in a certain order and not share them
          with anyone else.
        </p>

        <p>
          These 24 words are your seed phrase (or mnemonic) and are used to
          generate a private key. The private key is used to derive public keys
          that are then used to generate the addresses that your bitcoin wallet
          keeps track of.
        </p>
      </div>

      <img
        className="object-cover w-full py-12"
        src={process.env.PUBLIC_URL + "address-diagram.png"}
        alt="TABConf Logo"
      />

      <div className="prose">
        <p>
          That sounds like a lot, so let's walk through how this works with
          code.
        </p>

        <p>
          Further reading:{" "}
          <a
            href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
            target="_blank"
            rel="noreferrer"
          >
            BIP39 (mnemonics)
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
            target="_blank"
            rel="noreferrer"
          >
            BIP32 (deterministic wallets)
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
