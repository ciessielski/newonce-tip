let CURRENT_PLAY_ALBUM = {};
let CURRENT_PLAY_ARTIST = {};
let TIP_AMOUNT = 0;
let BLIK_CODE = {};
let IS_DESKTOP = false;

const warningBar = () => {
	let warningBar = document.createElement('div')
	warningBar.style.cssText = "color:white;text-align:center;background-color:red;width:100%;padding-bottom:5px;padding-top:5px;line-height:35px;z-index:9999;"
	warningBar.innerHTML = 'Ta strona jest kopią newonce.net stworzoną na potrzeby hackhatonu hack4music. <a href="https://github.com/ciessielski/newonce-tip" style="color: white;">[kod na githubie]</a>'

	return warningBar;
}

const fontUpload = () => {
	let link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('type', 'text/css');
	link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=VT323&display=swap');
	document.head.appendChild(link);
}

const preventDefault = () => {
	let playerWrapper = document.querySelector('.BottomNavPlayer_playerMeta__3cvLI');
	playerWrapper.style.cssText = 'overflow: visible';
}

const coinButton = (placement, podcast_index) => {

	let tipButton = document.createElement('button');
	tipButton.classList.add('coinButton');
	tipButton.style.cssText = `z-index: 0;
    	background-image: url(https://i.ibb.co/5RTRKXt/kapimoneta.png);
		background-repeat: no-repeat;
		background-size: contain;
		background-color: transparent;
		border: none;
		/* position: absolute; */
		width: 40px;
		height: 40px;`

	tipButton.onclick = ()=> {toggleDonateFrame()};

	return tipButton;
}

//Choosing the amount
const donateFrameStep1 = () => {
	let donateFrameStep1 = document.createElement('div');
	donateFrameStep1.classList.add('donateFrameStep1');

	let step1backgroundURL = IS_DESKTOP ? "https://i.ibb.co/kM2Pfbm/kapikwota-g.png" : "https://i.ibb.co/ZBkdk0M/kapikwota.png";
	donateFrameStep1.style.cssText = `background-image: url(${step1backgroundURL});background-size: contain;width: 100%;height: 100%;background-repeat: no-repeat`;
	//donateFrameStep1.classList.add('noneActiveFrame');

	let bottomPX = IS_DESKTOP ? "25px" : "40px";
	let amountButtonsHolder = document.createElement('div');
	amountButtonsHolder.style.cssText = `position: absolute;width: 150px;height: 40px;background-color: red;bottom: ${bottomPX};left: 30px;display: flex;justify-content: space-around;`

	let button5PLN = document.createElement('button');
	button5PLN.classList.add('button5PLN')
	button5PLN.style.cssText = "background-image: url('https://i.ibb.co/K6WSY30/kapi5N.png')";
	
	let button10PLN = document.createElement('button');
	button10PLN.classList.add('button10PLN');
	button10PLN.style.cssText = "background-image: url(https://i.ibb.co/f28S0nT/kapi10n.png);";
	
	let button50PLN = document.createElement('button');
	button50PLN.classList.add('button50PLN');
	button5PLN.onclick = () => {TIP_AMOUNT = 50}
	button50PLN.style.cssText = "background-image: url(https://i.ibb.co/8rpwj8Q/kapi50n.png);";

	button5PLN.classList.add('amountButton')
	button10PLN.classList.add('amountButton')
	button50PLN.classList.add('amountButton')

	amountButtonsHolder.appendChild(button5PLN);
	amountButtonsHolder.appendChild(button10PLN);
	amountButtonsHolder.appendChild(button50PLN);

	donateFrameStep1.appendChild(amountButtonsHolder);

	button5PLN.onclick = () => {
		document.querySelector('.donateFrameStep1').style.display = "none";
		document.querySelector('.donateFrameStep2').style.display = "block";
		TIP_AMOUNT = 500
		setAmoutBlikIcon(TIP_AMOUNT)
	}

	button10PLN.onclick = () => {
		document.querySelector('.donateFrameStep1').style.display = "none";
		document.querySelector('.donateFrameStep2').style.display = "block";
		TIP_AMOUNT = 1000
		setAmoutBlikIcon(TIP_AMOUNT)
	}

	button50PLN.onclick = () => {
		document.querySelector('.donateFrameStep1').style.display = "none";
		document.querySelector('.donateFrameStep2').style.display = "block";
		TIP_AMOUNT = 5000
		setAmoutBlikIcon(TIP_AMOUNT)
	}
	return donateFrameStep1;
}

const setAmoutBlikIcon = (tipAmount) => {
	let plnIcon5 = "https://i.ibb.co/ZKxVkFt/kapi5-1.png";
	let plnIcon10 = "https://i.ibb.co/qjSMhSj/kapi10.png";
	let plnIcon50 = "https://i.ibb.co/DLfYJg4/kapi50.png";

	let amountIcon = document.querySelector('.amountIcon');
	let img = "";

	switch (tipAmount) {
		case 500:
			img = plnIcon5
			break;
		case 1000:
			img = plnIcon10
			break;
		case 5000:
			img = plnIcon50
			break;
		default:
			break;
	}
	
	amountIcon.src = img;
}

//Blik 
const donateFrameStep2 = () => {
	let donateFrameStep2 = document.createElement('div');
	donateFrameStep2.classList.add('donateFrameStep2');

	let donateframeURL = IS_DESKTOP ? "https://i.ibb.co/sj4pvNR/kapiblik-g.png" : "https://i.ibb.co/YX4Fsjs/kapikod.png";

	donateFrameStep2.style.cssText = `overflow: auto;background-image: url(${donateframeURL});background-size: contain;width: 100%;height: 100%;background-repeat: no-repeat`;
	donateFrameStep2.classList.add('noneActiveFrame');

	let step2ContentHolder = document.createElement('div');

	let marginTop = IS_DESKTOP ? "74px" : "55px" 
	step2ContentHolder.style.cssText = `width: 80%;margin: ${marginTop} auto;display: flex;justify-content: center;flex-wrap: wrap;`
	let step2ContentHolderIconsHolder = document.createElement('div');
	let step2ContentHolderInputHolder = document.createElement('div');
	
	let blikIcon = document.createElement('img');
	blikIcon.style.cssText = "height: 25px;padding-right: 10px;"
	blikIcon.src="https://i.ibb.co/8DPKtV8/kapiblik.png" 
	let amountIcon = document.createElement('img');
	amountIcon.classList.add('amountIcon')
	amountIcon.src="https://i.ibb.co/ZKxVkFt/kapi5-1.png"
	amountIcon.style.cssText = "height: 25px;"

	let blikInput = document.createElement('input');
	blikInput.style.cssText = 'padding: 10px;font-size: 20px;text-align: center;font-weight: bolder;width: 80%;display: block;margin: 0 auto;border: none;background-image: url("https://i.ibb.co/Ytfh73r/kapiramka-blik.png");background-size: contain;background-repeat: no-repeat;background-position: center;height: 30px;'

	step2ContentHolderIconsHolder.appendChild(blikIcon)
	step2ContentHolderIconsHolder.appendChild(amountIcon)

	step2ContentHolderInputHolder.appendChild(blikInput)

	step2ContentHolder.appendChild(step2ContentHolderIconsHolder);
	step2ContentHolder.appendChild(step2ContentHolderInputHolder);

	donateFrameStep2.append(step2ContentHolder)	
	
	donateFrameStep2.onkeyup = () => {
		BLIK_CODE = blikInput.value;
		let count = blikInput.value.length 

		if(count >= 6){
			document.querySelector('.donateFrameStep2').style.display = "none";
			document.querySelector('.donateFrameStepLOADING').style.display = "block";

			setTimeout(()=> {
				donate(CURRENT_PLAY_ARTIST, BLIK_CODE, TIP_AMOUNT);
				document.querySelector('.donateFrameStepLOADING').style.display = "none";
				document.querySelector('.donateFrameStep3').style.display = "block";

				setTimeout(()=> {
					document.querySelector('.donateFrame').classList.remove('activeDonateFrame');
					// document.querySelector('.donateButton').style.backgroundImage = `url('https://i.ibb.co/NNrrkh7/kapitick.png')`
				}, 4000);
			}, 5000);
		}			
	}
	
	return donateFrameStep2;
}

const donateFrameStepLOADING = () => {
	let donateFrameStepLOADING = document.createElement('div');
	donateFrameStepLOADING.classList.add('donateFrameStepLOADING');
	
	let backgroundURL = IS_DESKTOP ? "https://i.ibb.co/8gLvpXh/kapiklepsydra-g.png" : "https://i.ibb.co/nw08Dhf/kapiw8.png"

	donateFrameStepLOADING.style.cssText = `background-image: url(${backgroundURL});background-size: contain;width: 100%;height: 50%;background-repeat: no-repeat;height: 100%;background-position: center;`;
	donateFrameStepLOADING.classList.add('noneActiveFrame');
	
	return donateFrameStepLOADING;
}

//Thank u
const donateFrameStep3 = () => {
	let donateFrameStep3 = document.createElement('div');
	donateFrameStep3.classList.add('donateFrameStep3');
	
	let backgroundURL = IS_DESKTOP ? "https://i.ibb.co/D5NbjY7/kapidzieki-g.png" : "https://i.ibb.co/dtjPTKL/kapidzieki-d.png";

	donateFrameStep3.style.cssText = `background-image: url(${backgroundURL});background-size: contain;width: 100%;height: 100%;background-repeat: no-repeat`;
	donateFrameStep3.classList.add('noneActiveFrame');
	
	return donateFrameStep3;
}

const donateFrame = () => {
	let donateFrame = document.createElement('div');
	donateFrame.classList.add('donateFrame');
	donateFrame.classList.add('activeDonateFrame');
	
	if(IS_DESKTOP){
		donateFrame.style.cssText = 'transform: translateX(600px);background-size: contain;width: 216px;height: 150px;position: absolute;top: -485px;right: 610px;background-repeat: no-repeat';
	}

	donateFrame.appendChild(donateFrameStep1());
	donateFrame.appendChild(donateFrameStep2());
	donateFrame.appendChild(donateFrameStepLOADING());
	donateFrame.appendChild(donateFrameStep3());

	return donateFrame;
}

// const donateContainerBottomBox = () => {
// 	let donateContainerBottomBox = document.createElement('div');
// 	donateContainerBottomBox.style.cssText = "width: 100%;height: 0%;position: absolute;bottom: 0px;background-color: black;display:flex;justify-content: right;align-items: center;"
// 	donateContainerBottomBox.appendChild(donateFrame());

// 	return donateContainerBottomBox;
// }

// const donateContainer = (viewportWidth, desktopPlayerWidth, isDekstop) => {

// 	let donateContainer = document.createElement('div');
// 	donateContainer.classList.add('donateContainer');
// 	let desktopCSS = isDekstop ? "bottom:0;top:96px;" : "" 	
// 	donateContainer.style.cssText = `max-width:1023px;transform: translateX(1500px);position: fixed;width: 100%;bottom: 116px;max-height: 560px;${desktopCSS}`
// 	donateContainer.appendChild(donateContainerBottomBox())	

// 	return donateContainer;
// } 

// const toggleDonateContainer = (index) => {
// 	let donateContainer = document.querySelector('.donateContainer');

// 	const check = donateContainer.classList.contains("activeDonateContainer");
// 	if(check){
// 		donateContainer.classList.remove('activeDonateContainer');
// 	}
// 	else{
// 		console.log('dsds')
// 		donateContainer.classList.add('activeDonateContainer');
// 	}	
// }


const toggleDonateFrame = () => {
	let donateFrame = document.querySelector('.donateFrame');

	const check = donateFrame.classList.contains("activeDonateFrame");
	if(check){
		donateFrame.classList.remove('activeDonateFrame');
	}
	else{
		donateFrame.classList.add('activeDonateFrame');
	}
}

const addCSS = s => document.head.appendChild(document.createElement("style")).innerHTML=s;

const API_URL = 'https://newonce-tip-api.vercel.app/api';

const getNowPlaying = async () => {
    try {
        const response = await fetch(`${API_URL}/now-playing`);
        const data = await response.json()
        return data;
    } catch (e) {
        console.error(e);
    }
}

const donate = async (artist, blikCode, amount) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({artist, blikCode, amount});

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(`${API_URL}/donate`, requestOptions);
        const data = await response.json();
        return data
    } catch (e) {
        console.error(e);
    }
}

const updateArtist = () => {
	getNowPlaying().then((response) => {
		CURRENT_PLAY_ALBUM = response.artworkUrlLarge;
		CURRENT_PLAY_ARTIST = response.artist;
	});
}

const injectWarningBar = () => {
	let waringInjectHolder = document.querySelector('.AppBar_wrapper__2Z1NQ');
	waringInjectHolder.after(warningBar());
}

const injectDonateToPlayer = () => {
	const WINDOW_VW_WIDTH = window.innerWidth;
	const DEKSTOP_PLAYER_WIDTH = 496;
	const MAX_WIDTH_FOR_BOTTOM_PLAYER = 1023;
	IS_DESKTOP = (WINDOW_VW_WIDTH < MAX_WIDTH_FOR_BOTTOM_PLAYER) ? false : true;
	let footer = document.querySelector("footer");

	getNowPlaying().then((response) => {
		console.log(response)
		CURRENT_PLAY_ALBUM = response.artworkUrlLarge;
		CURRENT_PLAY_ARTIST = response.artist;
		
		if(!IS_DESKTOP){
			let playerTogglerButton = document.querySelector('.BottomNavPlayer_toggler__2fwVj');
			playerTogglerButton.after(coinButton());
			footer.after(donateContainer(WINDOW_VW_WIDTH, DEKSTOP_PLAYER_WIDTH));
		}else{
			let desktopPlayerButton = document.querySelector('.TopNavPlayer_controls__36S2C');
			desktopPlayerButton.before(coinButton(true))
			desktopPlayerButton.after(donateContainer(WINDOW_VW_WIDTH, DEKSTOP_PLAYER_WIDTH,IS_DESKTOP));
		}

		setInterval(() => {
			updateArtist();
			console.log('Artist update...')
		}, 2000);
	});

	preventDefault();
	fontUpload();
	addCSS(`
	.activeDonateContainer{ 
		transform: translateX(0px) !important
	}
	
	.activeCoinBuuton{
		display:none;
	}

	.activeDonateFrame{
		transform: translateX(0px) !important;
	}

	.noneActiveFrame{
		display:none;
	}

	.donateFrame{
		transform: translateX(600px);
		background-size: contain;
		width: 216px;
		height: 150px;
		position: absolute;
		top: -175px;
		right: 17px;
		background-repeat: no-repeat;
	}

	.amountButton{
		width: 50px;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		border: none;
		background-color: white;
	}
	`)
}

const allPodcastElements = () => {
	return document.querySelectorAll(".EpisodePlayer_player__ALyFI")
}

function addCoinsToAllPodcasts() {
	for (var i = 0; i < allPodcastElements().length; i++) {
		allPodcastElements()[i].insertAdjacentElement('beforeend', coinButton())
	}
}

const injectDonateToPodcasts = () => {
	addCoinsToAllPodcasts()
	// TODO: [] (optional) add payu logic
}

const injectDonateToArticle = () => {
	// TODO: 
	// [] inject coin into article footer next to author
	// [] (optional) add payu logic
}

injectWarningBar()
injectDonateToPodcasts();
injectDonateToArticle()
injectDonateToPlayer();

