export const getUTCTime = (dateStr) => {
    if(!dateStr){ return }
    const date = new Date(dateStr);
    return date.getUTCFullYear() +"/"+date.getUTCMonth()+"/"+date.getUTCDate();
}