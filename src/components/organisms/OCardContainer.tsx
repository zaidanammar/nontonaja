import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const OCardContainer = ({ children }: Props) => {
  return (
    <section className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 my-4">
      {children}
    </section>
  );
};

export default OCardContainer;
