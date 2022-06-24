// import services and utilities
import { getBeanies } from './services/beaniesService.js';
// import component creators
import createBeaniesList from './components/beaniesList.js';
import createFilter from './components/filter.js';
import createPaging from './components/paging.js';
// declare state variables
import state from './state.js';
// write handler functions
async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    state.name = params.get('name') || '';
    state.starSign = params.get('starSign') || '';
    state.yearStart = params.get('yearStart') || '';
    state.yearEnd = params.get('yearEnd') || '';

    state.page = Number(params.get('page')) || 1;
    state.pageSize = Number(params.get('pageSize')) || 10;

    const start = (state.page - 1) * state.pageSize;
    const end = (state.page * state.pageSize) - 1;

    const response = await getBeanies(state.name, state.starSign, state.yearStart, state.yearEnd, { start, end });
    state.beanies = response.data;
    state.totalPages = Math.ceil(response.count / state.pageSize);
    display();
}

function handleFilter(data) {
    const params = new URLSearchParams(window.location.search);
    params.set('name', data.name);
    params.set('starSign', data.starSign);
    params.set('yearStart', data.yearStart);
    params.set('yearEnd', data.yearEnd);
    params.set('page', 1);

    window.location.search = params.toString();
}

function handlePaging(change, size) {
    const params = new URLSearchParams(window.location.search);
    
    state.page = Number(size) === state.pageSize ? Math.max(1, state.page + change) : 1;
    

    params.set('page', state.page);
    params.set('pageSize', size);
    window.location.search = params.toString();
}
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const beaniesList = createBeaniesList(document.querySelector('.beanies-list'));
const filter = createFilter(document.querySelector('form'), { handleFilter });
const paging = createPaging(document.querySelector('.controls'), { handlePaging });

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    filter({ name: state.name, starSign: state.starSign, yearStart: state.yearStart, yearEnd: state.yearEnd });
    paging({ page: state.page, pageSize: state.pageSize, totalPages: state.totalPages });
    beaniesList({ beanies: state.beanies });
    
}

// Call display on page load
handlePageLoad();