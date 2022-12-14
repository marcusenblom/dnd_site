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