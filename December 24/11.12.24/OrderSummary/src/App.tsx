import imgWomen from "./assets/images/illustration-hero.svg";
import signMusic from "./assets/images/icon-music.svg";

function App() {
  return (
    <div className="max-w-sm min-w-72 max-w-screen-sm h-fit rounded-2xl my-8 mx-8 text-center bg-white flex flex-col gap-7 ">
      <img
        className="rounded-t-2xl overflow-hidden"
        src={imgWomen}
        alt="photo"
      />
      <h1 className="font-bold text-xl">Order Summary</h1>
      <p className="opacity-60 w-55 px-6">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="overflow-hidden min-w-80 flex gap-7 bg-Very-paleblue mx-7 rounded-lg p-2 ">
        <img src={signMusic} alt="sign Music" />
        <div className="flex flex-col ">
          <span className="font-bold">Annual Plan</span>
          <span>$59.99/year</span>
        </div>
        <button className="cursor-pointer ml-12 text-blue-800 font-medium underline pt-4 hover:no-underline">
          Change
        </button>
      </div>
      <button className="mx-5 cursor-pointer hover:opacity-80 bg-Bright-blue drop-shadow-xl text-white mx-8 rounded-2xl px-8 py-3 text-lg font-bold">
        Proceed to Payment
      </button>
      <button className="cursor-pointer mb-9 font-medium opacity-60 hover:opacity-100">
        Cancel Order
      </button>
    </div>
  );
}

export default App;
