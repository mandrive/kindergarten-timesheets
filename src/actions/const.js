const keyMirror = require('keyMirror');

module.exports = keyMirror({
  FETCH_GROUPS_IN_PROGRESS: null,
  FETCH_GROUPS_SUCCEDED: null,
  FETCH_GROUPS_FAILED: null,

  GENERATE_INVOICE_IN_PROGRESS: null,
  GENERATE_INVOICE_FAILED: null,
  GENERATE_INVOICE_SUCCEDED: null,

  FETCH_CHILDREN_IN_PROGRESS: null,
  FETCH_CHILDREN_FAILED: null,
  FETCH_CHILDREN_SUCCEDED: null,

  SELECT_GROUP: null,

  FETCH_TIMESHEETS_IN_PROGRESS: null,
  FETCH_TIMESHEETS_FAILED: null,
  FETCH_TIMESHEETS_SUCCEDED: null
});
