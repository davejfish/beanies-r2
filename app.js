// import services and utilities
import { getBeanies } from './services/beaniesService.js';
// import component creators
import createBeaniesList from './components/beaniesList.js';
import createFilter from './components/filter.js';
// declare state variables
import state from './state.js';
// write handler functions
async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    state.name = params.get('state.name') || '';
    state.starSign = params.get('state.starSign') || '';

    state.page = Number(params.get('state.page')) || 1;

    const start = (state.page - 1) * state.pageSize;
    const end = (state.page * state.pageSize) - 1;

    const response = await getBeanies(state.name, state.starSign, { start, end });
    state.beanies = response.data;
    state.totalPages = Math.ceil(response.count / state.pageSize);
    display();
}

function handleFilter(data) {
    const params = new URLSearchParams(window.location.search);

    params.set('state.name', data.name);
    params.set('state.starSign', data.starSign);
    params.set('state.page', 1);

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