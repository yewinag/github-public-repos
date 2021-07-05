export const getPaginatedList = (list, current_page) => { // list array/ start = 0 , end = 10
    let page = current_page || 1,
	per_page = 10,
	offset = (page - 1) * per_page;
    return list.slice(offset).slice(0, per_page)
}