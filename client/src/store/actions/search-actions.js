export const SEARCH_ANALOGS = "SOFT::SEARCH_ANALOGS";

export const searchAnalogs = (type) => ({
  type: SEARCH_ANALOGS,
  payload: type,
});
