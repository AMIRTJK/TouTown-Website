function Card({ title, image, price, news }) {
  return (
    <>
      <div className="post h-[190px] w-[45%] sm:h-[481px] sm:w-[23.9%] flex flex-col gap-[12px]">
        {/* Mobile */}
        <div className="content bg-[#272727] p-[24px] rounded-[14px] h-[412px] flex flex-col justify-center items-center relative">
          <div className="wrapper-icon absolute top-[5%] right-[8%] h-[37px] w-[37px] rounded-[18.5px] flex justify-center items-center hover:bg-[#c80000] transition-all duration-100">
            <img src="src/assets/+.svg" alt="" className="cursor-pointer" />
          </div>
          <div className="wrapper-image">
            <img src={image} alt="" />
          </div>
          <div className="block sm:hidden wrapper-text cursor-pointer">
            <p className="font-[400] text-[11px] leading-[13px]">{title}</p>
            <div className="price-news flex items-center gap-[28px] mt-[10px]">
              <p className="text-[14px] font-[600] leading-[17px] opacity-50">
                {price}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block wrapper-text cursor-pointer">
          <p className="font-[500] text-[14px] leading-[28px]">{title}</p>
          <div className="price-news flex items-center gap-[28px]">
            <p className="text-[14px] font-[600] leading-[28px] opacity-50">
              {price}
            </p>
            <p className="text-[14px] font-[600] leading-[28px] text-[#FF3232]">
              {news}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card };
