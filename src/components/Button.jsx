const Button = ({
  children: description = 'Um botão',
  onButtonClick = null,
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) onButtonClick();
  };

  return (
    <button
      className="bg-gray-200 p-2 mb-2 rounded-md"
      onClick={handleButtonClick}
    >
      {description}
    </button>
  );
};

export default Button;
