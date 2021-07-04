export const getPaginatedList = (list, page) => {
    return list.splice(0, page);
}