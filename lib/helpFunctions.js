export function formatChallengeRating(cr){
    return cr == 0.125 ? "1/8" : cr == 0.25 ? "1/4" : cr == 0.5 ? "1/2" : cr;
}