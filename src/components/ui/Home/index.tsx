export const Home = () => {
  return (
    <>
      <div className="clear-both" />
      <div className="fixed left-0 top-0 z-40 w-full h-full overflow-y-auto overflow-hidden">
        <div className="max-w-xl z-50 my-7 px-5 mx-auto relative flex items-center calc-height">
          <div className="p-0 bg-white relative rounded-xl h-full w-full text-center overflow-hidden">
            <img src="images/demo-ads.jpg" className="" alt="ads" />

            <a className="absolute right-2 top-3 text-white w-auto h-6 px-3 leading-6 bg-black inline-block rounded-3xl hover:bg-gray-600">
              Skip Ads
            </a>
          </div>
        </div>
      </div>

      <div className="fixed bg-current left-0 top-0 opacity-40 z-30 w-full h-full" />
    </>
  );
};
