import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from 'react-icons/ai';

const FlashCardItem = ({
  children: flashcard,
  onDelete = null,
  onEdit = null,
}) => {
  const { title, description } = flashcard;

  const handleDeleteCard = () => {
    if (onDelete) onDelete(flashcard.id);
  };

  const handleEditCard = () => {
    if (onEdit) onEdit(flashcard);
  };

  return (
    <div className="border p-2 m-2">
      <ul className="flex flex-col space-y-4">
        <li>
          <strong>Título:</strong> <span>{title}</span>
        </li>
        <li>
          <strong>Descrição:</strong> <span>{description}</span>
        </li>
      </ul>

      <div className="flex mt-4 space-x-2 justify-end">
        <EditIcon
          onClick={handleEditCard}
          size={24}
          className="cursor-pointer"
        />
        <DeleteIcon
          onClick={handleDeleteCard}
          size={24}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FlashCardItem;
