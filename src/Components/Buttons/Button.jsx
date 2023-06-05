const Button = ({ btnText }) => {
  return (
    <div className="text-center my-4">
      <button className="btn btn-outline border-0  border-b-4">
        {btnText}
      </button>
    </div>
  );
};

export default Button;
