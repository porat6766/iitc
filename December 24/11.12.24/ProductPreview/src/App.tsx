import perfumeImgMobile from "./assets/product-preview-card-component-main/images/image-product-mobile.jpg";
import perfumeImgDesktop from "./assets/product-preview-card-component-main/images/image-product-desktop.jpg";
import cart from "./assets/product-preview-card-component-main/images/icon-cart.svg";
function App() {
  return (
    <div className="mx-6 sm:flex sm:mx-60">
      <picture>
        <source srcSet={perfumeImgDesktop} media="(min-width: 640px)" />
        <img
          className="rounded-t-lg h-full min-w-60"
          src={perfumeImgMobile}
          alt="perfume photo"
        />
      </picture>
      <div className="bg-white p-5 rounded-b-lg flex flex-col gap-10 font-young_serif sm:justify-around">
        <h3 className="opacity-40 sm:text-lg">P E R F U M E</h3>
        <h1 className="font-bold text-2xl sm:text-3xl">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="opacity-60 sm:text-base">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex gap-8">
          <span className="text-DarkCyan font-bold text-3xl sm:text-4xl">
            $149.99
          </span>
          <span className="line-through opacity-50 pt-1 sm:text-lg">
            $169.99
          </span>
        </div>
        <div className="cursor-pointer hover:bg-DarkGreen bg-DarkCyan text-white rounded-xl py-4 flex justify-center gap-4">
          <img className="min-w-5" src={cart} alt="cart icon" />
          <button className="font-medium sm:text-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
