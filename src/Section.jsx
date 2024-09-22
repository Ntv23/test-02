import React from "react";
import Section01 from "./component/Section01";
import Section02 from "./component/Section02";
import News from "./component/News";
import Partner from "./component/Partner";
import FloatButton from "./component/FloatButton";

const Section = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Section01 />
      <Section02 />
      <News />
      <Partner />
      <FloatButton />
    </div>
  );
};

export default Section;
