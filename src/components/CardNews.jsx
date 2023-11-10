const CardNews = ({ date, title, image }) => {
  return (
    <>
      <div
        className="post h-[465px] w-[31%] flex flex-col justify-between bg-[#fff] rounded-[14px] overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="wrapper-date text-right py-[25px] px-[35px]">
          <p>{date}</p>
        </div>
        <div className="wrapper-title">
          <p className=" py-[25px] px-[35px]">{title}</p>
        </div>
      </div>
    </>
  );
};

export { CardNews };
