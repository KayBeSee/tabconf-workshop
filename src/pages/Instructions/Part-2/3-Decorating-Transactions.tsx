/* eslint-disable react/jsx-no-comment-textnodes */
import { Section, CodeBlock } from "src/pages/Instructions/components";

export default function DecoratingTransactions() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Decorating transactions
      </h1>
      <div className="prose">
        <p>
          Now that you have transaction data from Blockstream's API, you'll
          notice that there is nothing about it that is specific to your
          addresses.
        </p>

        <p>
          Is this a transaction where you sent someone bitcoin? Did someone send
          you bitcoin? How much bitcoin was sent from one person to the other?
        </p>

        <p>
          In order to use this data in a meaningful way in our wallet, we need
          to decorate it using the information we know about our addresses.
        </p>

        <p>
          We'll start by going through each input and output and labeling them
          <code>isMine</code> and <code>isChange</code> so that we can later
          determine how much we are sending or receiving in each transaction.
        </p>

        {/* prettier-ignore */}
        <CodeBlock>
          export const decorateTx = ( {"\n"}
            tx: BlockstreamAPITransactionResponse, {"\n"}
            externalAddresses: Address[], {"\n"}
            changeAddresses: Address[] {"\n"}
          ) =&gt;  &#123; {"\n"}
            const externalMap = createMap(externalAddresses, "address"); {"\n"}
            const changeMap = createMap(changeAddresses, "address"); {"\n"}
            {"\n"}
            const vin: DecoratedVin[] = tx.vin.map((vin) =&gt;  &#123; {"\n"}
              const isChange = !!changeMap[vin.prevout.scriptpubkey_address]; {"\n"}
              const isMine = isChange || !!externalMap[vin.prevout.scriptpubkey_address]; {"\n"}
              return  &#123; ...vin, isChange: isChange, isMine: isMine  &#125;; {"\n"}
            &#125;);

            const vout: DecoratedVout[] = tx.vout.map((vout) =&gt;  &#123; {"\n"}
              const isChange = !!changeMap[vout.scriptpubkey_address]; {"\n"}
              const isMine = isChange || !!externalMap[vout.scriptpubkey_address]; {"\n"}
              return  &#123; ...vout, isChange: isChange, isMine: isMine &#125;; {"\n"}
            &#125;); {"\n"}
            {"\n"}
            const type = getTxType(tx, vin, vout); {"\n"}
            {"\n"}
            const txCopy: DecoratedTx =  &#123; {"\n"}
              ...tx, {"\n"}
              vin, {"\n"}
              vout, {"\n"}
              type, {"\n"}
            &#125;; {"\n"}
            {"\n"}
            return txCopy;{"\n"}
          &#125;;{"\n"}
        </CodeBlock>
      </div>
    </Section>
  );
}
