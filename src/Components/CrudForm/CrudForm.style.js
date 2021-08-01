import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  item: {
    flex: 1,
    padding: 16,
  },
  itemAddress: {
    flex: 2,
  },
  action: {
    flex: 1,
  },
  actionButton: {
    padding: "8px 32px !important",
  },
}));

export { useStyle };
