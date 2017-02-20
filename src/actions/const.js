var keyMirror = require('keymirror');

module.exports = keyMirror({
    FETCH_GROUPS_IN_PROGRESS: null,
    FETCH_GROUPS_SUCCEDED: null,
    FETCH_GROUPS_FAILED: null,

    GENERATE_INVOICE_IN_PROGRESS: null,
    GENERATE_INVOICE_FAILED: null,
    GENERATE_INVOICE_SUCCEDED: null,
});