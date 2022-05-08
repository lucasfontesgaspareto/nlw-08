import { Popover } from "@headlessui/react";
import { X } from 'phosphor-react'

export function CloseButton() {
  return <Popover.Button
    className="top-4 right-4 absolute text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary"
    title="Fechar formulário de feedback"
  >
    <X weight="bold" className="w-4 h-4"/>
  </Popover.Button>
}