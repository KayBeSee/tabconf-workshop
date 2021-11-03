/* eslint-disable react/jsx-no-comment-textnodes */
import { Section, CodeBlock } from "src/pages/Instructions/components";

export default function QueryingTransactions() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Querying transactions
      </h1>
      <div className="prose">
        <p>
          In order to query transactions associated with an address, we will
          make a GET request to
          <code>https://blockstream.info/api/address/OUR_ADDRESS/txs</code>{" "}
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
            const BASE_URL = 'https://blockstream.info/api/address';{"\n"}
            const &#123; data &#125; = await axios.get(`$&#123;BASE_URL&#125;/$&#123;address&#125;/txs`);{"\n"}
            {"\n"}
            console.log('data'){"\n"}
        </CodeBlock>
      </div>
    </Section>
  );
}
