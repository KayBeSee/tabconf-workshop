import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
  SwitchHorizontalIcon,
  PaperAirplaneIcon,
  CollectionIcon,
  DownloadIcon,
  PencilAltIcon,
  XIcon,
  CogIcon,
  MailIcon,
} from "@heroicons/react/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const location = useLocation();
  const navigation = [
    {
      name: "Instructions",
      href: "/",
      icon: PencilAltIcon,
      current: location.pathname === "/",
    },
    {
      name: "Addresses",
      href: "/addresses",
      icon: MailIcon,
      current: location.pathname === "/addresses",
    },
    {
      name: "Receive",
      href: "/receive",
      icon: DownloadIcon,
      current: location.pathname === "/receive",
    },
    {
      name: "Transactions",
      href: "/transactions",
      icon: SwitchHorizontalIcon,
      current: location.pathname === "/transactions",
    },
    {
      name: "UTXOs",
      href: "/utxos",
      icon: CollectionIcon,
      current: location.pathname === "/utxos",
    },
    {
      name: "Send",
      href: "/send",
      icon: PaperAirplaneIcon,
      current: location.pathname === "/send",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: CogIcon,
      current: location.pathname === "/settings",
    },
  ];

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-tabconf-blue-500 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-tabconf-blue-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src={process.env.PUBLIC_URL + "tabconf-logo.png"}
                    alt="TABConf Logo"
                  />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-tabconf-blue-800 text-white"
                          : "text-tabconf-blue-200 hover:bg-tabconf-blue-600 hover:text-white",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-tabconf-blue-200"
                            : "text-tabconf-blue-300 group-hover:text-tabconf-blue-200",
                          "mr-4 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex bg-tabconf-blue-600 p-4">
                <a
                  href={`http://twitter.com/${process.env.REACT_APP_TWITTER_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 group block"
                >
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={`https://unavatar.io/twitter/${process.env.REACT_APP_TWITTER_USERNAME}`}
                        alt="Twitter avatar"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">
                        @{process.env.REACT_APP_TWITTER_USERNAME}
                      </p>
                      <p className="text-sm font-medium text-tabconf-blue-300 group-hover:text-tabconf-blue-200">
                        Follow on Twitter
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 bg-tabconf-blue-700">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src={process.env.PUBLIC_URL + "tabconf-logo.png"}
                alt="TABConf Logo"
              />
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-tabconf-blue-800 text-white"
                      : "text-tabconf-blue-200 hover:bg-tabconf-blue-600 hover:text-white",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-tabconf-blue-200"
                        : "text-tabconf-blue-300 group-hover:text-tabconf-blue-200",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex bg-tabconf-blue-600 p-4">
            <a
              href={`http://twitter.com/${process.env.REACT_APP_TWITTER_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 w-full group block"
            >
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src={`https://unavatar.io/twitter/${process.env.REACT_APP_TWITTER_USERNAME}`}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">
                    @{process.env.REACT_APP_TWITTER_USERNAME}
                  </p>
                  <p className="text-xs font-medium text-tabconf-blue-200 group-hover:text-tabconf-blue-100">
                    Follow on Twitter
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
