import ListItem, { ButtonProps, LinkProps } from "./ListItem";
import React, { useContext } from "react";
import { SearchContext } from "../lib/context";

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, "index"> {
  index?: number;
  label?: string;
  icon?: React.ReactNode;
}

export default function FreeSearchAction({
  label = "Search for",
  icon,
  ...props
}: FreeSearchActionProps) {
  const { search } = useContext(SearchContext);

  return (
    <ListItem index={0} icon={icon} showType={false} {...props}>
      <span className="max-w-md truncate dark:text-white">
        {label} <span className="font-semibold">"{search}"</span>
      </span>
    </ListItem>
  );
}
