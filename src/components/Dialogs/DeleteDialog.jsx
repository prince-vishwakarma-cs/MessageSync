import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { AlertCircle } from "react-feather";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"


export const DeleteDialog = ({ open, handleClose, deleteHandler }) => {
  return (
    <Dialog>
  <DialogTrigger>{open}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  );
};

