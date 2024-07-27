function Header() {
  return (
    <header className="bg-violet-950 px-4 py-3 text-center text-xl font-semibold text-stone-100 sm:text-start">
      <span className="ml-2 cursor-pointer" onClick={() => location.reload()}>
        Wellness Retreats
      </span>
    </header>
  );
}

export default Header;
