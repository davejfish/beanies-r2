const state = [];

state.beanies = [];
state.beanie = [];
state.page = 1;
state.pageSize = 10;
state.totalPages = 0;


function initialize() {
    state.beanies = [];
    state.beanie = {};
    state.page = 1;
    state.pageSize = 10;
    state.totalPages = 0;
}

initialize();

export default state;