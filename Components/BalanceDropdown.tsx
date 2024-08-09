import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function BalanceDropdown({
  wallets,
  selectedWallet,
  setSelectedWallet,
}: {
  wallets: any;
  selectedWallet: any;
  setSelectedWallet: any;
}) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[black] shadow-sm ring-1 ring-inset ring-slate-300 outine-0 focus:outline-0 hover:bg-gray-50">
          {selectedWallet?.currency_code}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-[black]"
            aria-hidden="true"
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" bg-[white] absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {wallets?.map((wallet: any) => (
                <Menu.Item key={wallet.id}>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedWallet(wallet)}
                      className={classNames(
                        active ? "bg-[white] text-[black]" : "text-[black]",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {wallet.currency_code}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default BalanceDropdown;
