Storing Selected Bottle Data with LocalStorage in React

How It Works:
Fetch Data: All bottle data is loaded using fetch() and displayed in the UI.

Select Bottle: When a user selects a bottle, the selected item is saved to localStorage.

Store & Retrieve:

The selected bottles are stored in localStorage using setItem.

On page reload or return visit, the selected bottles are retrieved from localStorage and displayed to the user.