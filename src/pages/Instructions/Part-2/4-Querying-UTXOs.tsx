/* eslint-disable react/jsx-no-comment-textnodes */
import { Section, CodeBlock } from "src/pages/Instructions/components";

export default function QueryingUTXOs() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">Querying UTXOs</h1>
      <div className="prose">
        <p>Now we are starting to get into the knitty-gritty.</p>

        <p>Bitcoin transactions have inputs and outputs.</p>

        <p>
          For simplicity's sake, we will assume that all inputs are owned by a
          single user. When a user sends bitcoin to someone else, they create a
          transaction with some of their inputs and send them to an output
          address controlled by the person they want to send money to.
        </p>

        <p>
          These outputs that an address controls are called UTXOs or Unspent
          Transaction Outputs. We use one or many of these outputs as inputs
          when we construct a transaction to send money to someone else.
        </p>

        <p>
          In order to query UTXOs associated with an address, we will make a GET
          request to
          <code>
            https://blockstream.info/api/address/OUR_ADDRESS/utxo
          </code>{" "}
          using axios.
        </p>

        <p>
          This returns an array of transaction objects associated with our
          address from Blockstream's API.
        </p>
        {/* prettier-ignore */}
        <CodeBlock>
            import axios from 'axios'; {"\n"}
            {"\n"}
            const BASE_URL = 'https://blockstream.info/api/address/';{"\n"}
            const &#123; data &#125; = await axios.get(`$&#123;BASE_URL&#125;/$&#123;address&#125;/utxo`);{"\n"}
            {"\n"}
            console.log('data'){"\n"}
        </CodeBlock>
      </div>
    </Section>
  );
}
