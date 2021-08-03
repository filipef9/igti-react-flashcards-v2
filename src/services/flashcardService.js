import { get } from "./httpService";

const BACKEND_URL = 'https://3001-salmon-skunk-86vu943o.ws-us13.gitpod.io';

export const apiGetAllFlashCards = async () => {
  const allFlashCards = await get(`${BACKEND_URL}/flashcards`);
  return allFlashCards.map(card => ({ ...card, showTitle: true }));
};