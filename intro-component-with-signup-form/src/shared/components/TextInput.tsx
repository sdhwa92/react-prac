interface IProp {
  placeholder?: string;
}

function TextInput(props: IProp) {
  return (
    <input
      type="text"
      className="px-8 py-4 outline-solid border border-solid border-gray-400 rounded-md focus:outline-gray-500"
      {...props}
    />
  );
}

export default TextInput;
