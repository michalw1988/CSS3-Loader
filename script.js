var codeShown = false;
var whichLoader = 1;
var htmlCodes = [];
var cssCodes = [];



$(document).ready(function () {
	// loader 1
	$('#loaderButton1').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton1').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader1').css('display', 'block');
		whichLoader = 1;
		hideCodeDiv();
	});
	
	// loader 2
	$('#loaderButton2').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton2').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader2').css('display', 'block');
		whichLoader = 2;
		hideCodeDiv();
	});

	// loader 3
	$('#loaderButton3').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton3').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader3').css('display', 'block');
		whichLoader = 3;
		hideCodeDiv();
	});
	
	// loader 4
	$('#loaderButton4').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton4').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader4').css('display', 'block');
		whichLoader = 4;
		hideCodeDiv();
	});
	
	// loader 5
	$('#loaderButton5').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton5').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader5').css('display', 'block');
		whichLoader = 5;
		hideCodeDiv();
	});
	
	// loader 6
	$('#loaderButton6').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton6').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader6').css('display', 'block');
		whichLoader = 6;
		hideCodeDiv();
	});
	
	// loader 7
	$('#loaderButton7').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton7').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader7').css('display', 'block');
		whichLoader = 7;
		hideCodeDiv();
	});
	
	// loader 8
	$('#loaderButton8').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton8').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader8').css('display', 'block');
		whichLoader = 8;
		hideCodeDiv();
	});
	
	// loader 9
	$('#loaderButton9').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton9').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader9').css('display', 'block');
		whichLoader = 9;
		hideCodeDiv();
	});
	
	// loader 10
	$('#loaderButton10').on('click', function(){
		$('.button').removeClass('buttonActive');
		$('#loaderButton10').addClass('buttonActive');
		$('.loader').css('display', 'none');
		$('#loader10').css('display', 'block');
		whichLoader = 10;
		hideCodeDiv();
	});
	
	
	// showing or hiding code
	$('#showCodeButton').on('click', function(){
		if(!codeShown){
			codeShown = true;
			$('#showCodeButton').addClass('buttonActive');
			$('#showCodeDiv').css('display', 'block');
			$('#showCodeButton').html('Hide code');
			$('#loaderDiv').css('display', 'none');
			
			
			$('#htmlTextarea').html(htmlCodes[whichLoader-1]);
			$('#cssTextarea').html(cssCodes[whichLoader-1]);

		} else {
			hideCodeDiv();
		}
	});
	
});



// for hiding code he clicking 'Hide Code' or any loader button
function hideCodeDiv() {
	codeShown = false;
	$('#showCodeButton').removeClass('buttonActive');
	$('#showCodeDiv').css('display', 'none');
	$('#showCodeButton').html('Show code');
	$('#loaderDiv').css('display', 'block');
}



// ------------ data for laoders codes ------------ //

htmlCodes[0] = '<div id="loader1"></div>';

htmlCodes[1] = '<div id="loader2"></div>';

htmlCodes[2] = '<div id="loader3">\n  <div id="outer">\n    <div id="inner">\n      <div id="center"></div>\n    </div>\n  </div>\n</div>';

htmlCodes[3] = '<div id="loader4">\n  <div id="inner"></div>\n</div>';

htmlCodes[4] = '<div id="loader5">\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n</div>';

htmlCodes[5] = '<div id="loader6">\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n</div>';

htmlCodes[6] = '<div id="loader7">\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n  <div class="circleBox"><div class="circle"></div></div>\n</div>';

htmlCodes[7] = '<div id="loader8">\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n</div>';

htmlCodes[8] = '<div id="loader9">\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n</div>';

htmlCodes[9] = '<div id="loader10">\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n  <div class="rectangleBox"><div class="rectangle"></div></div>\n</div>';

cssCodes[0] = '#loader1 {\n  margin: auto;\n  margin-top: 20px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 7px solid rgba(0,0,0,0.3);\n  border-top: 7px solid #333;\n  animation: loader1Animation 1.2s linear infinite;\n}\n\n@keyframes loader1Animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}';

cssCodes[1] = '#loader2 {\n  margin: auto;\n  margin-top: 24px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 5px solid rgba(80, 80, 80, 0.3);\n  border-left: 5px solid rgba(80, 80, 80, 1);\n  border-right: 5px solid rgba(80, 80, 80, 1);\n  animation: loader2Animation 2s ease infinite;\n}\n\n@keyframes loader2Animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(540deg);\n  }\n}';

cssCodes[2] = '#loader3 {\n  margin: auto;\n  margin-top: 17px;\n}\n\n#loader3 #outer {\n  margin: auto;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 5px solid rgba(0,0,0,0);\n  border-top: 5px solid rgba(50, 50, 50, 0.4);\n  border-bottom: 5px solid rgba(50, 50, 50, 0.4);\n  animation: loader3OuterSpin 2s linear infinite;\n}\n\n#loader3 #inner {\n  margin: auto;\n  margin-top: 4px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 5px solid rgba(0,0,0,0);\n  border-left: 5px solid rgba(50, 50, 50, 0.6);\n  border-right: 5px solid rgba(50, 50, 50, 0.6);\n  animation: loader3InnerSpin 1s linear infinite;\n}\n\n#loader3 #center {\n  margin: auto;\n  margin-top: 5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: rgba(50, 50, 50, 0.8);\n}\n\n@keyframes loader3OuterSpin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loader3InnerSpin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}';

cssCodes[3] = '#loader4 {\n  position: relative;\n  margin-left: 35px;\n  margin-top: 25px;\n  width: 30px;\n  height: 30px;\n  perspective: 80px;\n}\n\n#loader4 > #inner {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background-color: rgba(50, 50, 50, 0.8);\n  animation: loader4Animation 1.2s ease infinite;\n}\n\n@keyframes loader4Animation {\n  0% {\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateZ(180deg);\n  }\n}';

cssCodes[4] = '#loader5 {\n  margin: auto;\n  margin-top: 20px;\n}\n\n#loader5 .circleBox {\n  display: inline-flex;\n  width: 20px;\n  height: 20px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n}\n\n#loader5 .circleBox:nth-of-type(1) {\n  left: 40px;\n  top: 10px;\n}\n#loader5 .circleBox:nth-of-type(2) {\n  left: 52.5px;\n  top: 13.5px;\n}\n#loader5 .circleBox:nth-of-type(3) {\n  left: 61.5px;\n  top: 22.5px;\n}\n#loader5 .circleBox:nth-of-type(4) {\n  left: 65px;\n  top: 35px;\n}\n#loader5 .circleBox:nth-of-type(5) {\n  left: 61.5px;\n  top: 47.5px;\n}\n#loader5 .circleBox:nth-of-type(6) {\n  left: 52.5px;\n  top: 56.5px;\n}\n#loader5 .circleBox:nth-of-type(7) {\n  left: 40px;\n  top: 60px;\n}\n#loader5 .circleBox:nth-of-type(8) {\n  left: 27.5px;\n  top: 56.5px;\n}\n#loader5 .circleBox:nth-of-type(9) {\n  left: 18.5px;\n  top: 47.5px;\n}\n#loader5 .circleBox:nth-of-type(10) {\n  left: 15px;\n  top: 35px;\n}\n#loader5 .circleBox:nth-of-type(11) {\n  left: 18.5px;\n  top: 22.5px;\n}\n#loader5 .circleBox:nth-of-type(12) {\n  left: 27.5px;\n  top: 13.5px;\n}\n\n#loader5  .circle {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(80, 80, 80, 0);\n  animation: loader5Animation 1.2s linear infinite;\n}\n\n#loader5 .circleBox:nth-of-type(1) .circle {\n  animation-delay: 0s;\n}\n#loader5 .circleBox:nth-of-type(2) .circle {\n  animation-delay: 0.1s;\n}\n#loader5 .circleBox:nth-of-type(3) .circle {\n  animation-delay: 0.2s;\n}\n#loader5 .circleBox:nth-of-type(4) .circle {\n  animation-delay: 0.3s;\n}\n#loader5 .circleBox:nth-of-type(5) .circle {\n  animation-delay: 0.4s;\n}\n#loader5 .circleBox:nth-of-type(6) .circle {\n  animation-delay: 0.5s;\n}\n#loader5 .circleBox:nth-of-type(7) .circle {\n  animation-delay: 0.6s;\n}\n#loader5 .circleBox:nth-of-type(8) .circle {\n  animation-delay: 0.7s;\n}\n#loader5 .circleBox:nth-of-type(9) .circle {\n  animation-delay: 0.8s;\n}\n#loader5 .circleBox:nth-of-type(10) .circle {\n  animation-delay: 0.9s;\n}\n#loader5 .circleBox:nth-of-type(11) .circle {\n  animation-delay: 1s;\n}\n#loader5 .circleBox:nth-of-type(12) .circle {\n  animation-delay: 1.1s;\n}\n\n@keyframes loader5Animation {\n  0% {\n    background-color: rgba(80, 80, 80, 1);\n  }\n  80% {\n    background-color: rgba(80, 80, 80, 0);\n  }\n  100% {\n    background-color: rgba(80, 80, 80, 0);\n  }\n}';

cssCodes[5] = '#loader6 {\n  margin: auto;\n  margin-top: 20px;\n}\n\n#loader6 .circleBox {\n  display: inline-flex;\n  width: 20px;\n  height: 20px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n}\n\n#loader6 .circleBox:nth-of-type(1) {\n  left: 40px;\n  top: 10px;\n}\n#loader6 .circleBox:nth-of-type(2) {\n  left: 52.5px;\n  top: 13.5px;\n}\n#loader6 .circleBox:nth-of-type(3) {\n  left: 61.5px;\n  top: 22.5px;\n}\n#loader6 .circleBox:nth-of-type(4) {\n  left: 65px;\n  top: 35px;\n}\n#loader6 .circleBox:nth-of-type(5) {\n  left: 61.5px;\n  top: 47.5px;\n}\n#loader6 .circleBox:nth-of-type(6) {\n  left: 52.5px;\n  top: 56.5px;\n}\n#loader6 .circleBox:nth-of-type(7) {\n  left: 40px;\n  top: 60px;\n}\n#loader6 .circleBox:nth-of-type(8) {\n  left: 27.5px;\n  top: 56.5px;\n}\n#loader6 .circleBox:nth-of-type(9) {\n  left: 18.5px;\n  top: 47.5px;\n}\n#loader6 .circleBox:nth-of-type(10) {\n  left: 15px;\n  top: 35px;\n}\n#loader6 .circleBox:nth-of-type(11) {\n  left: 18.5px;\n  top: 22.5px;\n}\n#loader6 .circleBox:nth-of-type(12) {\n  left: 27.5px;\n  top: 13.5px;\n}\n\n#loader6  .circle {\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background-color: #444;\n  animation: loader6Animation 1.2s linear infinite;\n}\n\n#loader6 .circleBox:nth-of-type(1) .circle {\n  animation-delay: 0s;\n}\n#loader6 .circleBox:nth-of-type(2) .circle {\n  animation-delay: 0.1s;\n}\n#loader6 .circleBox:nth-of-type(3) .circle {\n  animation-delay: 0.2s;\n}\n#loader6 .circleBox:nth-of-type(4) .circle {\n  animation-delay: 0.3s;\n}\n#loader6 .circleBox:nth-of-type(5) .circle {\n  animation-delay: 0.4s;\n}\n#loader6 .circleBox:nth-of-type(6) .circle {\n  animation-delay: 0.5s;\n}\n#loader6 .circleBox:nth-of-type(7) .circle {\n  animation-delay: 0.6s;\n}\n#loader6 .circleBox:nth-of-type(8) .circle {\n  animation-delay: 0.7s;\n}\n#loader6 .circleBox:nth-of-type(9) .circle {\n  animation-delay: 0.8s;\n}\n#loader6 .circleBox:nth-of-type(10) .circle {\n  animation-delay: 0.9s;\n}\n#loader6 .circleBox:nth-of-type(11) .circle {\n  animation-delay: 1s;\n}\n#loader6 .circleBox:nth-of-type(12) .circle {\n  animation-delay: 1.1s;\n}\n\n@keyframes loader6Animation {\n  0% {\n    width: 0px;\n    height: 0px;\n  }\n  30% {\n    width: 8px;\n    height: 8px;\n  }\n  40% {\n    width: 8px;\n    height: 8px;\n  }\n  60% {\n    width: 8px;\n    height: 8px;\n  }\n  70% {\n    width: 0px;\n    height: 0px;\n  }\n  100% {\n    width: 0px;\n    height: 0px;\n  }\n}';

cssCodes[6] = '#loader7 {\n  margin: auto;\n  margin-top: 20px;\n}\n\n#loader7 .circleBox {\n  display: inline-flex;\n  width: 15px;\n  height: 15px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 30px;\n}\n\n#loader7 .circleBox:nth-of-type(1) {\n  left: 10px;\n}\n#loader7 .circleBox:nth-of-type(2) {\n  left: 25px;\n}\n#loader7 .circleBox:nth-of-type(3) {\n  left: 40px;\n}\n#loader7 .circleBox:nth-of-type(4) {\n  left: 55px;\n}\n#loader7 .circleBox:nth-of-type(5) {\n  left: 70px;\n}\n\n#loader7  .circle {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: #444;\n  animation: loader7Animation 1s linear infinite;\n}\n\n#loader7 .circleBox:nth-of-type(1) .circle {\n  animation-delay: 0s;\n}\n#loader7 .circleBox:nth-of-type(2) .circle {\n  animation-delay: 0.2s;\n}\n#loader7 .circleBox:nth-of-type(3) .circle {\n  animation-delay: 0.4s;\n}\n#loader7 .circleBox:nth-of-type(4) .circle {\n  animation-delay: 0.6s;\n}\n#loader7 .circleBox:nth-of-type(5) .circle {\n  animation-delay: 0.8s;\n}\n\n@keyframes loader7Animation {\n  0% {\n    width: 4px;\n    height: 4px;\n  }\n  25% {\n    width: 12px;\n    height: 12px;\n  }\n  50% {\n    width: 4px;\n    height: 4px;\n  }\n  100% {\n    width: 4px;\n    height: 4px;\n  }\n}';

cssCodes[7] = '#loader8 {\n  margin: auto;\n  margin-top: 20px;\n}\n\n#loader8 .rectangleBox {\n  display: inline-flex;\n  width: 10px;\n  height: 30px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 25px;\n}\n\n#loader8 .rectangleBox:nth-of-type(1) {\n  left: 25px;\n}\n#loader8 .rectangleBox:nth-of-type(2) {\n  left: 35px;\n}\n#loader8 .rectangleBox:nth-of-type(3) {\n  left: 45px;\n}\n#loader8 .rectangleBox:nth-of-type(4) {\n  left: 55px;\n}\n#loader8 .rectangleBox:nth-of-type(5) {\n  left: 65px;\n}\n\n#loader8  .rectangle {\n  width: 8px;\n  height: 8px;\n  background-color: #444;\n  animation: loader8Animation 1s linear infinite;\n}\n\n#loader8 .rectangleBox:nth-of-type(1) .rectangle {\n  animation-delay: 0s;\n}\n#loader8 .rectangleBox:nth-of-type(2) .rectangle {\n  animation-delay: 0.2s;\n}\n#loader8 .rectangleBox:nth-of-type(3) .rectangle {\n  animation-delay: 0.4s;\n}\n#loader8 .rectangleBox:nth-of-type(4) .rectangle {\n  animation-delay: 0.6s;\n}\n#loader8 .rectangleBox:nth-of-type(5) .rectangle {\n  animation-delay: 0.8s;\n}\n\n@keyframes loader8Animation {\n  0% {\n    height: 8px;\n  }\n  25% {\n    height: 30px;\n  }\n  50% {\n    height: 8px;\n  }\n  100% {\n    height: 8px;\n  }\n}';

cssCodes[8] = '#loader9 {\n  margin: auto;\n  margin-top: 15px;\n}\n\n#loader9 .rectangleBox {\n  display: inline-flex;\n  width: 20px;\n  height: 20px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  transform: rotate(45deg);\n  transform-origin: 10px 10px;\n}\n\n#loader9 .rectangleBox:nth-of-type(1) {\n  top: 30px;\n  left: 10px;\n}\n#loader9 .rectangleBox:nth-of-type(2) {\n  top: 30px;\n  left: 30px;\n}\n#loader9 .rectangleBox:nth-of-type(3) {\  top: 30px;\n  left: 50px;\n}\n#loader9 .rectangleBox:nth-of-type(4) {\n  top: 30px;\n  left: 70px;\n}\n\n#loader9  .rectangle {\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  background-color: rgba(50, 50, 50, 1);\n  animation: loader9Animation 2s linear infinite;\n}\n\n#loader9 .rectangleBox:nth-of-type(1) .rectangle {\n  animation-delay: 0s;\n}\n#loader9 .rectangleBox:nth-of-type(2) .rectangle {\n  animation-delay: 0.1s;\n}\n#loader9 .rectangleBox:nth-of-type(3) .rectangle {\n  animation-delay: 0.2s;\n}\n#loader9 .rectangleBox:nth-of-type(4) .rectangle {\n  animation-delay: 0.3s;\n}\n\n@keyframes loader9Animation {\n  0% {\n    width: 10px;\n    height: 10px;\n    background-color: rgba(50, 50, 50, 1);\n  }\n  15% {\n    width: 5px;\n    height: 5px;\n    background-color: rgba(50, 50, 50, 0);\n  }\n  50% {\n    width: 5px;\n    height: 5px;\n    background-color: rgba(50, 50, 50, 0);\n  }\n  65% {\n    width: 10px;\n    height: 10px;\n    background-color: rgba(50, 50, 50, 1);\n  }\n  100% {\n    width: 10px;\n    height: 10px;\n    background-color: rgba(50, 50, 50, 1);\n  }\n}';

cssCodes[9] = '#loader10 {\n  margin: auto;\n}\n\n#loader10 .rectangleBox {\n  display: inline-flex;\n  width: 12px;\n  height: 12px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 34px;\n}\n\n#loader10 .rectangleBox:nth-of-type(1) {\n  left: 20px;\n}\n#loader10 .rectangleBox:nth-of-type(2) {\n  left: 32px;\n}\n#loader10 .rectangleBox:nth-of-type(3) {\n  left: 44px;\n}\n#loader10 .rectangleBox:nth-of-type(4) {\n  left: 56px;\n}\n#loader10 .rectangleBox:nth-of-type(5) {\n  left: 68px;\n}\n\n#loader10  .rectangle {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: rgba(50, 50, 50, 0.1);\n  border: 1px solid rgba(50, 50, 50, 0.2);\n  animation: loader10Animation 1s linear infinite;\n}\n\n#loader10 .rectangleBox:nth-of-type(1) .rectangle {\n  animation-delay: 0s;\n}\n#loader10 .rectangleBox:nth-of-type(2) .rectangle {\n  animation-delay: 0.1s;\n}\n#loader10 .rectangleBox:nth-of-type(3) .rectangle {\n  animation-delay: 0.2s;\n}\n#loader10 .rectangleBox:nth-of-type(4) .rectangle {\n  animation-delay: 0.3s;\n}\n#loader10 .rectangleBox:nth-of-type(5) .rectangle {\n  animation-delay: 0.4s;\n}\n\n@keyframes loader10Animation {\n  0% {\n    background-color: rgba(50, 50, 50, 1);\n  }\n  50% {\n    background-color: rgba(50, 50, 50, 0.1);\n  }\n  100% {\n    background-color: rgba(50, 50, 50, 0.1);\n  }\n}';