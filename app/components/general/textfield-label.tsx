

const TextfieldLabel = () => {
  return (
    <div className="w-[890px] flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-neutral-color-black font-body-md-semibold">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div className="relative tracking-[-0.02em] leading-[24px] font-semibold inline-block min-w-[126px]">Upload Document</div>
        <div className="self-stretch rounded-lg box-border overflow-hidden flex flex-row items-center justify-start max-w-full [row-gap:20px] text-neutral-color-400 border-[1px] border-solid border-neutral-color-200 mq1025:flex-wrap">
          <button className="cursor-pointer [border:none] py-3 px-[30px] bg-neutral-color-100 rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray">
            <div className="relative text-base tracking-[-0.02em] leading-[24px] font-semibold font-body-md-semibold text-neutral-color-500 text-left inline-block min-w-[78px]">Upload File</div>
          </button>
          <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-start py-3 px-2.5 box-border min-w-[75px] max-w-full">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold inline-block min-w-[75px]">sample.pdf</div>
          </div>
        </div>
      </div>
      <div className="w-[94px] h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px] text-sm text-neutral-color-500">
        <img className="h-4 w-4 relative" loading="lazy" alt="" src="/icon-info.svg" />
        <div className="relative leading-[20px] shrink-0">The file must be either in PDF or DOC format.</div>
      </div>
    </div>);
};

export default TextfieldLabel;
