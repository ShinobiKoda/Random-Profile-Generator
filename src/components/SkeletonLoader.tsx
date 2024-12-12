const SkeletonLoader = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8 space-y-6">
      <div className="flex justify-center items-center space-x-4">
        <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded-md w-32 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-md w-24 animate-pulse"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded-md w-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
