# Fetch Take Home Project

This project is a React application built with TypeScript, Vite, and various other libraries. It allows users to search for dogs, view details, and manage their favorite dogs. Below are some of the key features implemented in this project.

## Features

### Login
- **Component**: [`LoginForm`](src/screens/Login/Login.tsx)
- **Hook**: [`useLogin`](src/hooks/useLogin.tsx)
- Users can log in by providing their email and name.
- On successful login, users are redirected to the search page.

### Search Dogs
- **Component**: [`Search`](src/screens/Search/Search.tsx)
- **Hooks**: [`useSearch`](src/hooks/useSearch.tsx), [`useBreeds`](src/hooks/useSearch.tsx)
- Users can search for dogs by breed, sort order, and sort by different criteria.
- The search results are paginated, and users can navigate through pages.

### Favorite Dogs
- **Component**: [`Favorites`](src/screens/Favorites/Favorites.tsx)
- **Context**: [`FavoriteDogsContext`](src/context/FavoriteDogsContext.tsx)
- Users can add or remove dogs from their favorites.
- Favorite dogs are stored in local storage and persist across sessions.

### Match Dogs
- **Component**: [`MatchDialog`](src/components/MatchDialog/MatchDialog.tsx)
- **Hook**: [`useMatch`](src/hooks/useMatch.tsx)
- Users can match with a dog from their favorites.
- A dialog is shown with the matched dog's details.

### Toast Notifications
- **Component**: [`Toast`](src/components/Toast/Toast.tsx)
- Toast notifications are used to display messages, such as login errors.

### Dog Cards
- **Component**: [`DogCard`](src/components/DogCard/DogCard.tsx)
- Displays details of a dog, including image, name, age, zip code, and breed.
- Users can add or remove dogs from their favorites directly from the card.

### Select Components
- **Components**: [`SingleSelect`](src/components/SingleSelect/SingleSelect.tsx), [`MultiSelect`](src/components/MultiSelect/MultiSelect.tsx)
- Custom select components for single and multiple selections, used in the search filters.

### Pagination
- **Component**: [`PaginationFooter`](src/components/PaginationFooter/PaginationFooter.tsx)
- Pagination component to navigate through search results.