import * as Popover from "@radix-ui/react-popover";
import {PersonIcon,PlusCircledIcon,BookmarkIcon,ExitIcon,ChevronDownIcon,
} from "@radix-ui/react-icons";
import { UserCircleIcon } from "@heroicons/react/24/solid";

// ----------- Decorator (função que adiciona destaque ao componente) -----------
const withHighlight = (WrappedComponent) => {
  return ({ isHighlighted = false, ...props }) => {
    const highlightClass = isHighlighted ? "bg-yellow-100 font-semibold" : "";
    return (
      <div className={highlightClass}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// ----------- Componente base -----------
const PopoverItem = ({ icon, text, isFirst = false, isLast = false }) => (
  <button
    className={`
      flex items-center gap-2 w-full px-4 py-2 text-sm text-sky-900 
      ${isFirst ? "rounded-t-xl" : ""}
      ${isLast ? "rounded-b-xl" : ""}
      hover:bg-secondary-100
    `}
  >
    {icon}
    <span>{text}</span>
  </button>
);

// ----------- Componente decorado -----------
const HighlightedPopoverItem = withHighlight(PopoverItem);

// ----------- Popover principal -----------
const UserPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="flex items-center gap-1 cursor-pointer">
          <UserCircleIcon className="w-8 h-8 text-primary-800" />
          <ChevronDownIcon />
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={5}
          className="bg-white border border-gray-300 rounded-xl shadow-lg w-48 p-0 overflow-hidden"
        >
          <div className="flex flex-col divide-y divide-gray-300">
            <PopoverItem icon={<PersonIcon />} text="Meu perfil" />
            <PopoverItem icon={<PlusCircledIcon />} text="Criar anúncio" />
            <PopoverItem icon={<BookmarkIcon />} text="Meus anúncios" />
            <PopoverItem icon={<ExitIcon />} text="Sair" isLast />
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default UserPopover;
