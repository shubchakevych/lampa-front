# About components folder

There should only be reusable components. For example: buttons, inputs, spinners, modals etc.
UI-CORE folder created for the general components each as inputs, buttons and other small elements which can be reused.
At the root of components folder should only be big reusable components which can have a children folders. For example: modals, charts, tables etc.

# About single component folder

Each component should have 3 files (or more). Base 3 files are index.js (where we will reexport our component), component-name.jsx (our component) and styles.scss (our component styles).
In different situations our component can includes additional files such as component-name.reducer.js, component-name.actions.js, component-name.types.js, component-name.utils.js etc...
For example: MODAL component can and must includes 
modal.jsx
index.js
styles.scss
modal.actions.js
modal.types.js
modal.reducer.js
