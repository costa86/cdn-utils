function getStringCollection(collection, choice) {
    let lower = collection.map(x => x.toLowerCase());
    let upper = lower.map(x => x.toUpperCase());
    let lowerInitials = lower.map(x => x.slice(0, 3));
    let upperInitials = upper.map(x => x.slice(0, 3));
    let options = {
        "l": lower,
        "u": upper,
        "li": lowerInitials,
        "ui": upperInitials
    }
    return options[choice] || lower;
}
function getWeekDays(choice) {
    let collection = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return (getStringCollection(collection, choice));
}
function getMonths(choice) {
    let collection = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    return (getStringCollection(collection, choice));
}
