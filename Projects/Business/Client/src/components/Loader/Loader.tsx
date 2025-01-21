const Loader = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center h-screen text-orange-400">
    <div className="w-12 h-12 border-4 border-t-orange-500 border-gray-700 rounded-full animate-spin mb-4"></div>
    <p className="text-lg">{message}</p>
  </div>
);

export default Loader;
