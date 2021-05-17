function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-blue-500 active:border-b-2 group">
      <Icon
        className={`h-5 sm:h-7 text-gray-500 text-center group-hover:text-blue-500 mx-auto ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
