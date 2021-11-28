// podcast main container: .PodcastTile_podcastTile__2fzQG PodcastTile_dark__MFolR
// podcast container with black background: .PodcastTile_meta__27gUS
// podcast cover image: .PodcastTile_image__1TurG

const podcastCoin = () => {

	let tipButton = document.createElement('button');
	tipButton.classList.add('coinButton');

	tipButton.style.cssText = `z-index: 9999; background: none; border: none; position: relative; margin: 0px; left: 90%; top: -20%;`

	tipButton.onclick = ()=> {toggleDonateContainer()};
	let tipButtonImage = document.createElement('img');
	tipButtonImage.src = "https://i.ibb.co/5RTRKXt/kapimoneta.png"

	// let destktopCSSIMG = !IS_DESKTOP ? "top: -34px;right: -20px;" : "";

	tipButtonImage.style.cssText = `width: 43px; position: absolute;`

	tipButton.appendChild(tipButtonImage)

	return tipButton;
}

const allPodcastElements = () => {
	// const elements = document.getElementById("PodcastTile_image__1TurG")
	const elements = document.querySelectorAll(".PodcastTile_meta__27gUS")

	return elements
}

function addCoinToPodcast(index) {
	
    allPodcastElements()[index].insertAdjacentElement('afterbegin', podcastCoin())
}

function addCoinsToAllPodcasts() {
    
	for (var i = 0; i < allPodcastElements().length; i++) {
		addCoinToPodcast(i)
	}
}

addCoinsToAllPodcasts()