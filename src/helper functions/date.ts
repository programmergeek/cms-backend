export const getTodaysDate = () => {
    const date = new Date
    const dateString = date.getDate() +" "+ months[date.getMonth()]+" "+date.getFullYear()
    return dateString
}

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]