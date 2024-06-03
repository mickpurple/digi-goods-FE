const Card = ({ name }: any) => {
  return (
    <div className="rounded-xl p-5 bg-[#C73659] border-2 border-[#fff0] hover:border-[#A91D3A] h-[100px]">
      <p>{name}</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-[#EEEEEE] min-h-[100dvh] relative w-full h-full">
      <div className="px-[20px] md:px-[65px] max-w-[1800px] mx-auto flex flex-col pt-20">
        <p className="text-5xl font-bold max-w-[500px] leading-[66px]">
          Amazing digital tools with{" "}
          <span className="text-[#C73659]">24/7 Support</span>
        </p>

        <div className="bg-[#dadada] rounded-2xl h-full w-full mt-20 p-5">
          <p className="text-xl font-semibold mb-5">Store Products</p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <Card name="SMTH" />
            <Card name="VALO_TRAINER" />
            <Card name="PRODUCT2" />
            <Card name="PROD_PREMIUM" />
            <Card name="PRODUCT3" />
            <Card name="PROD_LITE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
