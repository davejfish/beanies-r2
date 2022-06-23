const state = [];

state.beanies = [];
state.beanie = [];
state.page = 1;
state.pageSize = 10;
state.totalPages = 0;
state.name = '';
state.starSign = '';


function initialize() {
    state.beanies = [];
    state.beanie = {};
    state.page = 1;
    state.pageSize = 10;
    state.totalPages = 0;
    state.name = '';
    state.starSign = '';
}

initialize();

export default state;