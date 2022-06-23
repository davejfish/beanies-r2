// import services and utilities
import { getBeanies } from './services/beaniesService.js';
// import component creators
import createBeaniesList from './components/beaniesList.js';
import createFilter from './components/filter.js';
// declare state variables
import state from './state.js';
// write handler functions
async function handlePageLoad() {
    state.beanies = await getBeanies();
    display();
}

function handleFilter(data) {
    const params = new URLSearchParams(window.location.search);

    params.set('state.name', data.name);
    params.set('state.starSign', data.starSign);
    params.set('state.page', 1);

    console.log(state.name);

    window.location.search = params.toString();
}
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const beaniesList = createBeaniesList(document.querySelector('.beanies-list'));
const filter = createFilter(document.querySelector('form'), { handleFilter });

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    filter({ name: state.name, starSign: state.starSign });
    beaniesList({ beanies: state.beanies });
    
}

// Call display on page load
handlePageLoad();