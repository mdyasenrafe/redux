import React from "react";

type TContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: TContainerProps) {
  return <div>{children}</div>;
}
