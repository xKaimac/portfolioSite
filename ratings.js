//Below sets a function that contains an object storing what we will use to determine the rating, as well as the default rating of 0
function collect_ratings() {
    const ratings = {
        count: 0,
        sum: 0,
        average: 0
    };
    let rating = 0;

    //Below declares a constant that stores all class 'rating' from the HTML document into array elements
    const elements = document.querySelectorAll('.rating');

    //Below is a for loop that takes the value of rating, replaces the original 'star' text, and adds the value to count, as well as taking a sum of all votes, by multiplying count by each occurence of 'rating'
    elements.forEach(element => {
        rating = parseInt(element.id.replace('star', ''));
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value) * rating
    });

    if(ratings.count !== 0) {
        ratings.average = ratings.sum / ratings.count;
    }

    return collect_ratings(ratings);
}

//Listens for change on the document table, then changes the average output at the bottom of the table to the value of sum/count fixed to 2 decimal places
document.addEventListener('change', () => {
    const ratings = collect_ratings();
    document.querySelector('average').value = ratings.average.toFixed(2);
})