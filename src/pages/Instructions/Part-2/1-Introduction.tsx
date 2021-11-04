import { Section, CopyCommand } from "src/pages/Instructions/components";

export default function Part2Introduction() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">Introduction</h1>
      <div className="prose">
        <p>
          All of the operations we have done so far haven't required knowing the
          current state of the bitcoin blockchain is. Generating private keys,
          public keys, and addresses can all be done offline without an internet
          connection.{" "}
        </p>

        <p>
          This functionality is essentially what a hardware wallet does
          (although they provide other security checks that we can discuss
          later).
        </p>

        <p>
          In order to see how many satoshis our private key controls, we need to
          query the blockchain.
        </p>

        <p>There are two ways to query the blockchain:</p>
        <ol>
          <li>Download the bitcoin software and sync a full node</li>
          <li>Query an external API provided by a web service</li>
        </ol>

        <p>
          We are going to do the latter today and query Blockstream's API to get
          blockchain data.
        </p>

        <p>
          To do this, we are going to use a library called axios to make
          requests:
        </p>

        <CopyCommand command="npm install axios" showCommandArrow={true} />

        <p>
          Further reading:{" "}
          <a
            href="https://github.com/Blockstream/esplora/blob/master/API.md"
            target="_blank"
            rel="noreferrer"
          >
            Blockstream API Docs
          </a>
        </p>
      </div>
    </Section>
  );
}
