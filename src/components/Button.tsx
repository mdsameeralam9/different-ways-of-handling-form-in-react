import CircleLoader from "./CircleLoader";

const Button = ({ loading = false, type = "submit", label = "Submit" }) => {
  return (
    <div className="flex w-full justify-center items-center my-4">
      <button
        type={type}
        disabled={loading}
        className="bg-blue-900 h-8 flex justify-center text-white py-1 px-12 cursor-pointer rounded w-full disabled:opacity-80"
      >
        {!loading ? label : <CircleLoader />}
      </button>
    </div>
  );
};

export default Button;
