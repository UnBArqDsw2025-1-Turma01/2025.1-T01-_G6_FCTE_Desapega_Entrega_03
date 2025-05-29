import * as Popover from "@radix-ui/react-popover";
import {
  PersonIcon,
  PlusCircledIcon,
  BookmarkIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import { Button } from "../Layout/button"; // ajuste o caminho se necessário

const PopoverItem = ({ icon, text, isFirst = false, isLast = false }) => (
  <button
    className={`
      flex items-center gap-2 w-full px-4 py-2 text-sm text-sky-900 
      ${isFirst ? 'rounded-t-xl' : ''}
      ${isLast ? 'rounded-b-xl' : ''}
      hover:bg-sky-50
    `}
  >
    {icon}
    <span>{text}</span>
  </button>
);

const UserPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Menu</Button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={5}
          className="bg-white border border-gray-300 rounded-xl shadow-lg w-48 p-0"
        >
          <div className="flex flex-col divide-y divide-gray-300">
            <PopoverItem icon={<PersonIcon />} text="Meu perfil" isFirst />
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
