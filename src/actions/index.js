export const KEYWORD_CHANGED = 'KEYWORD_CHANGED';
export const keywordChanged = keyword =>({
  type: KEYWORD_CHANGED,
  payload: { keyword }
});

export const RECEIVE_ITEM_INDEX = 'RECEIVE_ITEM_INDEX';
export const receiveItemIndex = itemIndex => ({
  type: RECEIVE_ITEM_INDEX,
  payload: { itemIndex }
});


export const SCHEDULE_ITEM_FETCH = 'SCHEDULE_ITEM_FETCH';
export const CANCEL_ITEM_FETCH = 'CANCEL_ITEM_FETCH';
export const scheduleItemFetch = key => ({
  type: SCHEDULE_ITEM_FETCH,
  payload: { key }
});
export const cancelItemFetch = key => ({
  type: CANCEL_ITEM_FETCH,
  payload: { key }
});

export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  payload: { item }
});

export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const clearItems = () => ({
  type: CLEAR_ITEMS,
  payload: {}
});
