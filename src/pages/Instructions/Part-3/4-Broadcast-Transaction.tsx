import { CodeBlock, atomOneDark } from "react-code-blocks";

import { Section } from "src/pages/Instructions/components";

const code = `
export const broadcastTx = async (txHex: string) => {
  const { data } = await axios.post(\`$\{BASE_URL}/tx\`, txHex);

  // data = txid
  console.log(data);
};
`;

export default function Part4BroadcastTransaction() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">
        Broadcast transaction
      </h1>
      <div className="prose">
        <p>
          We now have a fully constructed and signed transaction that is ready
          to be broadcast to the bitcoin network!
        </p>

        <p>
          In order to broadcast our transaction, we have to extract it from our
          PSBT, convert it to a hexidecimal string, and then POST it to
          Blockstream's API.
        </p>

        <CodeBlock
          text={code}
          showLineNumbers={true}
          language="typescript"
          theme={atomOneDark}
        />
      </div>
    </Section>
  );
}
