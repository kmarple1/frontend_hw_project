import React from "react";

type ScreenTypes = {
  inputType: string;
  inputValue: string;
  isTitle?: boolean;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  showInput: boolean;
  text?: string;
};

export default function Screen({
  inputType,
  inputValue,
  isTitle,
  onSubmit,
  setInputValue,
  showInput,
  text,
}: ScreenTypes) {
  const inputRef: React.RefObject<HTMLInputElement | null> = React.useRef(null);

  React.useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  return (
    <div className="h-[232px] w-[244px] border-4 border-gray-200 bg-blue-400 text-center font-mono font-bold whitespace-pre-wrap [word-spacing:4px]">
      {isTitle ? (
        <div className="px-[14px] py-[26px] text-[22px]/[16px]">{text}</div>
      ) : (
        <div className="flex h-[118px] flex-col justify-center align-middle text-[14px]/[14px]">{text}</div>
      )}
      {showInput && (
        <form className="text-[14px]/[14px]" onSubmit={onSubmit}>
          {inputType === "number" && "$"}
          <input
            ref={inputRef}
            className="w-[80px] p-[4px] text-center caret-white"
            onChange={(event) => setInputValue(event.target.value)}
            step="0.01"
            type={inputType}
            value={inputValue}
          />
        </form>
      )}
    </div>
  );
}
