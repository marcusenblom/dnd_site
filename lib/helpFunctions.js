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