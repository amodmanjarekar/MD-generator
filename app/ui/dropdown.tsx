import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export interface DropdownOption {
  label: string,
  value: string,
}

export default function Dropdown(props: {
  name: string,
  options: DropdownOption[],
  selected: DropdownOption,
  setSelected: (value: DropdownOption) => void,
  description?: string,
}) {
  return (
    <Listbox name={props.name} value={props.selected} onChange={props.setSelected}>
      <ListboxButton className="text-left py-1 px-2 rounded-md outline outline-blue-400 flex justify-between">
        {props.selected.label}
        <ChevronDown />
      </ListboxButton>
      <ListboxOptions className="p-1 bg-mauve-600 w-(--button-width) mt-2 rounded-md" anchor="bottom">
        {props.options.map(option => 
          <ListboxOption
            key={option.value}
            value={option}
            className="p-1 cursor-pointer rounded-md hover:bg-mauve-500"
          >{option.label}</ListboxOption>
        )}
      </ListboxOptions>
      {props.description && <small className="mt-1 text-mauve-500 text-nowrap truncate">{props.description}</small>}
    </Listbox>
  )
}
