import { Section, CopyCommand } from "src/pages/Instructions/components";

export default function Part3Introduction() {
  return (
    <Section>
      <h1 className="text-xl font-semibold text-gray-900">Introduction</h1>
      <div className="prose">
        <p>
          Right now we have a minimally viable read-only wallet. This is
          something that we could use to keep track of all the relevant
          blockchain information for addresses that we control.
        </p>

        <p>The only problem is that we can't send money to other people!</p>

        <p>So let's look at how we can do that.</p>

        <p>
          We are going to use another library in the bitcoinjs family:{" "}
          <code>coinselect</code>.
        </p>

        <CopyCommand command="npm install coinselect" showCommandArrow={true} />

        <p>
          Further reading:{" "}
          <a
            href="https://github.com/bitcoinjs/coinselect"
            target="_blank"
            rel="noreferrer"
          >
            Coinselect Docs
          </a>
        </p>
      </div>
    </Section>
  );
}
