function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-5">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

        <h2 className="text-2xl font-bold text-gray-900">
          Stackly Restaurant
        </h2>

        <p className="text-gray-500">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loader;