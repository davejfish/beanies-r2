// import services and utilities
import { getBeanies } from './services/beaniesService.js';
// import component creators
import createBeaniesList from './components/beaniesList.js';
// declare state variables
import state from './state.js';
// write handler functions
async function handlePageLoad() {
    state.beanies = await getBeanies();
    display();
}
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const beaniesList = createBeaniesList(document.querySelector('.beanies-list'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    beaniesList({ beanies: state.beanies });
    
}

// Call display on page load
handlePageLoad();