export interface Stars {
  [personId: string]: { name: string; img: string };
}

export interface FavoritePersonState {
  favoritePerson: Stars;
}

export interface FavoritePersonNew {
  [key: string]: Stars;
}

export interface FavoritePersonAction {
  type: string;
  payload: Stars | string;
}
