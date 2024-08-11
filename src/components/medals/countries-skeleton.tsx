export const CountriesSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="h-20 w-full rounded-md bg-gray-100 animate-pulse"
        />
      ))}
    </div>
  );
};
