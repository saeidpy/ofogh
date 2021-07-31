import { Dialog } from "@material-ui/core";
import React, { createContext } from "react";

import { useStyle } from "./DialogProvider.style.js";

const DialogContext = createContext();
export default function DialogProvider({ children }) {
  const classes = useStyle();
  const [dialogs, setDialogs] = React.useState([]);
  const createDialog = (option) => {
    const dialog = { ...option, open: true };
    setDialogs([dialog]);
  };

  const closeDialog = () => {
    setDialogs((dialogs) => {
      const latestDialog = dialogs.pop();
      if (!latestDialog) return dialogs;
      if (latestDialog.onClose) latestDialog.onClose();
      return dialogs.filter((item) => item !== latestDialog);
    });
  };
  const contextValue = React.useRef([createDialog, closeDialog]);
  return (
    <DialogContext.Provider value={contextValue.current}>
      {children}
      {dialogs.map((dialog, i) => {
        return (
          <Dialog classes={classes} open={dialog.open} onClose={closeDialog}>
            {dialog.children}
          </Dialog>
        );
      })}
    </DialogContext.Provider>
  );
}
export const useDialog = () => React.useContext(DialogContext);
