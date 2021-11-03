import { useState } from "react";

import Flyout from "./components/Flyout";
import { ClipboardListIcon } from "@heroicons/react/outline";

import { SectionGroup, SectionHeading } from "./components/Section";

import Part1 from "./Part-1";
import Part2 from "./Part-2";
import Part3 from "./Part-3";

const content = [
  {
    title: "Part 1: Planting the seed",
    sections: [
      { title: "Introduction", component: Part1.Introduction },
      {
        title: "Generating a mnemonic",
        component: Part1.GeneratingMnemonic,
      },
      {
        title: "Deriving a private key",
        component: Part1.DerivingPrivateKey,
      },
      {
        title: "Storing fingerprint",
        component: Part1.StoreFingerprint,
      },
      { title: "Deriving an xpub", component: Part1.DerivingXpub },
      {
        title: "Deriving child public keys",
        component: Part1.DerivingChildPubkeys,
      },
      {
        title: "Generating an address",
        component: Part1.DerivingAddresses,
      },
    ],
  },
  {
    title: "Part 2: Querying the blockchain",
    sections: [
      { title: "Introduction", component: Part2.Introduction },
      {
        title: "Querying transactions",
        component: Part2.QueryingTransactions,
      },
      {
        title: "Decorating transactions",
        component: Part2.DecoratingTransactions,
      },
      { title: "Querying UTXOs", component: Part2.QueryingUTXOs },
    ],
  },
  {
    title: "Part 3: Creating a transaction",
    sections: [
      { title: "Introduction", component: Part3.Introduction },
      { title: "Create transaction", component: Part3.CreateTransaction },
      { title: "Signing a transaction", component: Part3.SignTransaction },
      {
        title: "Broadcast transaction",
        component: Part3.BroadcastTransaction,
      },
    ],
  },
];

export default function Instructions() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex-1 relative z-0 flex overflow-hidden">
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="fixed right-0 mr-4 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-tabconf-blue-600 hover:bg-tabconf-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tabconf-blue-500"
            >
              <ClipboardListIcon
                className="-ml-0.5 mr-2 h-4 w-4"
                aria-hidden="true"
              />
              Table of contents
            </button>

            {content.map((section) => (
              <SectionGroup>
                <SectionHeading>{section.title}</SectionHeading>
                {section.sections.map((subsection) => (
                  <div
                    id={`${section.title} ${subsection.title}`
                      .split(" ")
                      .join("_")}
                  >
                    <subsection.component />
                  </div>
                ))}
              </SectionGroup>
            ))}
          </div>
        </div>
      </main>
      <Flyout setOpen={setOpen} open={open} content={content} />
    </div>
  );
}
