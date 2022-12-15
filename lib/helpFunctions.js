export function formatChallengeRating(cr){
    return cr == 0.125 ? "1/8" : cr == 0.25 ? "1/4" : cr == 0.5 ? "1/2" : cr;
}

// Scroll to target html element
export function scrollToTargetElement(id){
    if(document){
        let element = document.getElementById(id);
        element && element.scrollIntoView({ behavior: "smooth", block: "start"});
    }
}

export function generateId(){
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}









// ----------------- DATES ----------------- //

// Returns if the date provided is yesterday
export function dateIsYesterday(date) {
    const otherDate = new Date(date);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (
        otherDate.getDate() === yesterday.getDate() &&
        otherDate.getMonth() === yesterday.getMonth() &&
        otherDate.getYear() === yesterday.getYear()
    ) {
        return true;
    } else {
        return false;
    }
}

// Returns if the date provided is today
export function dateIsToday(date) {
    const otherDate = new Date(date);
    const todayDate = new Date();

    if (
        otherDate.getDate() === todayDate.getDate() &&
        otherDate.getMonth() === todayDate.getMonth() &&
        otherDate.getYear() === todayDate.getYear()
    ) {
        return true;
    } else {
        return false;
    }
}

// Returns if the date is less than 4 hours ago
export function lessAnHoursAgo(date) {
    const otherDate = new Date(date);
    const now = new Date();

    // If more than 1 hour ago (14400000 milliseconds)
    if (Date.parse(now) - Date.parse(otherDate) < 3600000) {
        return true;
    } else {
        return false;
    }
}

// Returns provided date in format
export function formatDate(date){

    let formattedDate = new Date(date)
    .toLocaleDateString('sv',{month: 'short',day: 'numeric'})
    .replace(".", "");

    if(formattedDate == "Invalid Date"){
        return "";
    } else if (dateIsToday(date)){
        let format = date?.toLocaleTimeString('sv', {hour: '2-digit', minute:'2-digit'});

        return `Today ${format}`;
    } else if (dateIsYesterday(date)){
        let format = date?.toLocaleTimeString('sv', {hour: '2-digit', minute:'2-digit'});

        return `Yesterday ${format}`;
    } else {
        return formattedDate;
    }
}