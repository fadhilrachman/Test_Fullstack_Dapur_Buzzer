import React from "react";

interface Props {
  title: string;
  className?: string;
  endContent?: React.ReactNode;
}
const Title = (props: Props) => {
  return (
    <div className={`flex justify-between items-center ${props.className}`}>
      <h3 className={`text-lg font-semibold font-mono `}>{props.title}</h3>
      {props.endContent}
    </div>
  );
};

export default Title;
