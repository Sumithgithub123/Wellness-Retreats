function Banner() {
  return (
    <div className="hidden rounded bg-stone-300 px-4 py-4 shadow-md sm:block">
      <img
        className="h-52 w-full rounded object-cover"
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxZb2dhJTIwfGVufDF8fHx8MTcyMTc1MzMzNXww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="banner-image"
      />
      <p className="mt-4 text-lg">Discover Your Inner Peace</p>
      <p className="my-2 text-sm">
        Join us for a series of wellness retreats designed to help you find
        tranquility and rejuvenation.
      </p>
    </div>
  );
}

export default Banner;
