const state = [];

state.beanies = [];
state.beanie = [];
state.page = 1;
state.pageSize = 0;
state.totalPages = 0;
state.name = '';
state.starSign = '';
state.yearStart = null;
state.yearEnd = null;

function initialize() {
    state.beanies = [];
    state.beanie = {};
    state.page = 1;
    state.pageSize = 10;
    state.totalPages = 0;
    state.name = '';
    state.starSign = '';
    state.yearStart = 2018;
    state.yearEnd = 2020;
}

initialize();

export default state;