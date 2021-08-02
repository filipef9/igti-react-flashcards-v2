const FlashCard = ({
  id,
  title = 'Título do card',
  description = 'Descrição do card',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
}) => {
  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';

  const handleCardClick = () => {
    if (onToggleFlashCard) onToggleFlashCard(id);
  };

  return (
    <div
      className={`
        shadow-lg
        cursor-pointer
        m-2 p-4 w-96 h-48
        flex items-center justify-center
        font-semibold ${fontSizeClassName}
      `}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
};

export default FlashCard;
