import TextInput from "../shared/components/TextInput";

function SignupForm() {
  return (
    <div className="flex flex-col gap-5">
      <TextInput placeholder="First Name" />
      <TextInput placeholder="Last Name" />
      <TextInput placeholder="Email Address" />
      <TextInput placeholder="Password" />
      <button
        type="button"
        className="uppercase text-white w-full py-4 px-8 rounded-lg shadow-xl bg-green-500 active:bg-green-600"
      >
        Claim Your Free Trial
      </button>
      <div className="text-center">
        <p className="text-sm text-gray-400">
          By clicking the button, you are agreeing to our{" "}
          <a className="font-bold text-orange-500 hover:cursor-pointer">
            Terms and Services
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
