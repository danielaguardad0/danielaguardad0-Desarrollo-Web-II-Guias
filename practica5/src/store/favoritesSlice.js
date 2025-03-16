import { create } from 'zustand';
import { useNotificationsStore } from './useNotificationsStore'; 

export const createFavoritesSlice = (set, get) => ({
    //Estado inicial: una lista vacia de favoritos
    favorites: [],

    //Función para verificar si una receta ya esta en favoritos.
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink == id);
    },

    //Maneja el clic en el botón de favorito (agregar o eliminar)
    handleClickFavorite: (recipe) => {
        const { addNotification } = useNotificationsStore.getState(); // Obtiene la función para agregar notificaciones

        if(get().favoriteExists(recipe.idDrink)){
            // Si la receta ya está en favoritos, la eliminamos de la lista
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink != recipe.idDrink)
            }));

            // Agregar notificación de eliminación
            addNotification({
                type: 'info',
                message: `Se eliminó "${recipe.strDrink}" de favoritos.`,
            });

        } else {
            // Si no está en favoritos, la agregamos
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }));

            // Agregar notificación de agregado
            addNotification({
                type: 'success',
                message: `Se agregó "${recipe.strDrink}" a favoritos.`,
            });
        }

        // Guardamos la lista actualizada de favoritos en localStorage
        localStorage.setItem('favorites', JSON.stringify(get().favorites));
    },

    //Carga la lista de favoritos desde localstorage al iniciar la aplicación
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites');
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            });
        }
    }
});
