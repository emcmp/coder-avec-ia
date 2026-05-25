import React from "react";

export default function Row({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactElement {
  return <div className="row">{children}</div>;
}
