import { FC, useMemo } from "react";

type Props = {
  label: string;
  placeholder: string;
  helperText: string;
  propMinWidth: string;
  propHeight: string;
  propFlex: string;
};

const TextfieldLabel1: FC<Props> = ({
  label,
  placeholder,
  helperText,
  propMinWidth,
  propHeight,
  propFlex,
}) => {
  const labelStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const helperTextStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  return (
    <div className="w-[433px] flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-neutral-color-black font-body-md-semibold">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div
          className="relative tracking-[-0.02em] leading-[24px] font-semibold inline-block min-w-[102px]"
          style={labelStyle}
        >
          {label}
        </div>
        <div className="self-stretch rounded-xl box-border overflow-hidden flex flex-row items-center justify-start py-3 px-[15px] gap-[10px] max-w-full text-neutral-color-400 border-[1px] border-solid border-neutral-color-200">
          <img
            className="h-4 w-4 relative hidden"
            alt=""
            src="/icon-arrow-down.svg"
          />
          <div className="flex-1 relative leading-[24px] inline-block max-w-[calc(100%_-_26px)]">
            {placeholder}
          </div>
          <img
            className="h-4 w-4 relative"
            alt=""
            src="/icon-arrow-down1.svg"
          />
          <img
            className="h-4 w-4 relative hidden"
            alt=""
            src="/vuesaxlineareye.svg"
          />
        </div>
      </div>
      <div className="w-[94px] hidden flex-row items-center justify-start gap-[8px] text-sm text-neutral-color-500">
        <img className="h-4 w-4 relative" alt="" src="/icon-info.svg" />
        <div
          className="h-5 flex-1 relative leading-[20px] inline-block"
          style={helperTextStyle}
        >
          {helperText}
        </div>
      </div>
    </div>
  );
};

export default TextfieldLabel1;
