function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-300 px-5 py-2 rounded-lg font-medium hover:bg-red-400 transition-all duration-300 hover:text-stone-200"
    >
      {children}
    </button>
  );
}

export default Button;
