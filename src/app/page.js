import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="AndroidLarge1 w-[360px] h-[800px] relative bg-black">
        <div className="Frame10 p-2.5 left-[-1px] top-[436px] absolute" />
        <div className="MainLogo w-[96%] p-2.5 left-[2%] top-[0.5rem] absolute flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="Frame1 p-2.5 border border-white rounded-[3px] bg-slate-800 justify-center items-center gap-2.5 inline-flex">
            <div className="AnalogousColourWheel text-white text-2xl font-normal font-['Inter']">
              Analogous colour wheel
            </div>
          </div>
        </div>
        <div className="ChooseText p-2.5 left-[35px] top-[109px] absolute justify-center items-center gap-2.5 inline-flex">
          <div className="ChooseAColour text-white text-[15px] font-normal font-['Inter']">
            Choose a colour
          </div>
        </div>
        <div className="ColourWheel p-2.5 left-[53px] top-[133px] absolute justify-start items-start gap-2.5 inline-flex">
          <img
            className="Ellipse1 w-[234px] h-[234px] rounded-full border-2 border-purple-400"
            src="https://via.placeholder.com/234x234"
          />
        </div>
        <div className="Line1 w-[370px] h-[0px] left-0 top-[415px] absolute border border-white"></div>
        <div className="BoxesGroup left-[9px] top-[446px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="DivColourResults w-[342px] h-[307px] bg-stone-800 border border-white" />
          <div className="CurrentColorResult left-[114px] top-[17px] absolute flex-col justify-start items-center gap-2 flex">
            <div className="CurrentColour text-white text-[15px] font-normal font-['Inter']">
              Current colour
            </div>
            <div className="Rectangle1 absolute left-2 top-5 w-[116px] h-[60px] bg-yellow-300 border border-black" />
          </div>
          <div className="ComplimentaryColourOne left-[114px] top-[113px] absolute flex-col justify-start items-center gap-2 flex">
            <div className="ComplimentaryColourOne text-white text-[15px] font-normal font-['Inter']">
              Complimentary colour one
            </div>
            <div className="Rectangle2 absolute left-2 top-5 w-[116px] h-[60px] bg-yellow-200 border border-black" />
          </div>
          <div className="ComplimentaryColourTwo left-[114px] top-[209px] absolute flex-col justify-start items-center gap-2 flex">
            <div className="ComplimentaryColourTwo text-white text-[15px] font-normal font-['Inter']">
              Complimentary colour two
            </div>
            <div className="Rectangle3 absolute left-[0.5rem] top-5 w-[116px] h-[59px] bg-yellow-600 border border-black" />
          </div>
        </div>
        <div className="RandomiseBtn p-2.5 left-[252.96px] top-[347px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="Frame2 p-[4.70px] bg-gradient-to-l from-slate-700 to-slate-400 rounded-md shadow border justify-center items-center gap-[4.70px] inline-flex">
            <div className="Randomise text-white text-xs font-normal font-['Inter']">
              Randomise
            </div>
          </div>
        </div>
        <div className="LoadOfPixels left-[8px] top-[775px] absolute text-white text-sm font-normal font-['Poppins']">
          load of pixels
        </div>
      </div>
    </main>
  );
}
