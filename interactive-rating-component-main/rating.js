const ratingWrapper = document.querySelector(".rating-wrapper");
const thankYouWrapper = document.querySelector(".thank-you-wrapper");
const selectedMessage = document.querySelector(".radio-val");

function initiateThankYouScreen() {
	const ratings = document.getElementsByName("rating");
	for (i = 0; i < ratings.length; i++) {
		// Grab checked value
		if (ratings[i].checked) {
			console.log(ratings[i].value);
			// Load the data inside of the empty selectedMessages <p> tag
			selectedMessage.textContent = `You selected ${ratings[i].value} out of 5`;

			// Hide ratings, show thank you message.
			ratingWrapper.classList.add("hidden");
			thankYouWrapper.classList.remove("hidden");
		}
	}
}
