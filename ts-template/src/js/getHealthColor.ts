export function getHealthColor(item) {
    if (item.health > 50) {
        return("healthy")
    } 
    else if (item.health > 15) {
        return("wounded")
    }
    else {
        return("critical") 
    }
}