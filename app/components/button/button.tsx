import React from "react";

type ButtonBodyTypes = {
  onClick: React.Dispatch<React.SetStateAction<string>>;
  text: string;
};

const ButtonBody = ({ onClick, text }: ButtonBodyTypes) => {
  return (
    <button className="relative h-[20px] w-[41px]" disabled={!text} onClick={() => onClick(text || "")}>
      <div className="absolute top-[-2px] z-5 h-[12px] w-full rounded-sm bg-gray-400" />
      <div className="absolute bottom-[-2px] z-5 h-[12px] w-full rounded-sm bg-gray-700" />
      <div className="relative z-10 h-full w-full rounded-xs bg-gray-600" />
    </button>
  );
};

type ButtonTypes = {
  isLeft?: boolean;
  onClick: React.Dispatch<React.SetStateAction<string>>;
  text?: string;
};

const Button = ({ isLeft, onClick, text = "" }: ButtonTypes) => {
  return (
    <div className="justify-middle flex h-[34px] pb-[14px] font-mono text-sm font-bold">
      {isLeft ? (
        <>
          <ButtonBody onClick={onClick} text={text} />
          <div className="mt-[10] h-[4px] w-[13px] bg-gray-800" />
          {text !== "" && (
            <>
              <div className="mx-[4px] mt-[10] h-[3px] w-[13px] bg-white" />
              <span className="">{text}</span>
            </>
          )}
        </>
      ) : (
        <>
          {text !== "" && (
            <>
              <span className="pt-[2px]">{text}</span>
              <div className="mx-[4px] mt-[10] h-[3px] w-[13px] bg-white" />
            </>
          )}
          <div className="mt-[10] h-[4px] w-[13px] bg-gray-800" />
          <ButtonBody onClick={onClick} text={text} />
        </>
      )}
    </div>
  );
};

export default Button;
