export const getUTCTime = (dateStr) => { // format utc time
    if(!dateStr){ return }
    const date = new Date(dateStr);
    return date.getUTCFullYear() +"/"+date.getUTCMonth()+"/"+date.getUTCDate();
}

export const getPaginatedNumber = (total) => { // generate per_page 10
    let pages = [];
    let current = total / 100;
    let offset = (current - 1) * 10;
    if(total < 10){ return pages}
    for (let i = 1; i <= (total / 10); i++) {
        pages.push(i);        
    }
    return pages.slice(offset);
}