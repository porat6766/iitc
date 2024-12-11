import "./App.css";
import NavHref from "./navHref";

const links = [
  {
    label: "home",
    to: "/home",
  },
  {
    label: "content",
    to: "/content",
  },
  {
    label: "about",
    to: "/about",
  },
];

function App() {
  return (
    <div className="app">
      <NavHref links={links} />
      <main className="rounded-lg m-8 bg-slate-700">
        <div className="rounded-lg bg-slate-400 p-6">
          <h4 className="">baba</h4>
          <p className="">i am baba am i the best?</p>
          <button className="bg-black text-center text-red-400 p-2 rounded-lg focus:text-white">
            Click me
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
