Titanium.UI.setBackgroundColor('#000');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////												LOGIN PAGE											////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var loginWind = Ti.UI.createWindow
({
	text: 'Login',
   	backgroundColor:'black'	
});
	loginWind.open();
	
var loginView = Ti.UI.createView ///HOME PAGE VIEWS/////////////////////////////////////////////////////////////
({
	top: '37%',
	backgroundColor: '#d2b45b',
	height:'60%',
	width: '80%',
	borderRadius: 8,
});
	loginWind.add(loginView);

var homepgBanner = Ti.UI.createView
({
	top: '15%',
	backgroundImage: '/Images/uicommons.jpg',
	height:'20%',
	width: '100%'
});
	loginWind.add(homepgBanner);
	
var homepgTitle = Ti.UI.createView
({
	top: '5%',
	backgroundImage: '/Images/UofIlogo.png',
	height:'10%',
	width: '100%'
});	
	loginWind.add(homepgTitle);	

var userNameLabel = Ti.UI.createTextField/////HOME PAGE LABELS//////////////////////////////////////////////////////////
({
	hintText: 'User Name',
	backgroundColor:'white',
	top: '15%',
	width: '60%',
	height: '8%',
});
	loginView.add(userNameLabel);
	
var passwordLabel = Ti.UI.createTextField
({
	hintText: 'Password',
	backgroundColor:'white',
	top: '26%',
	width: '60%',
	height: '8%',
});
	loginView.add(passwordLabel);
										
var helpButton = Ti.UI.createButton/////////HOME PAGE BUTTONS//////////////////////////////////////////////////////
({
	title: 'Help',
		color:'black',
		height:Ti.UI.FILL,
		width:'23%',
		height: '8%',
		top: '63%',
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'15sp',
			fontWeight:'bold'
		}
});
	loginView.add(helpButton);
	
var okButton = Ti.UI.createButton 
({
	title: 'Submit',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'23%',
		height: '8%',
		top: '40%',
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'15sp',
			fontWeight:'bold'
		}, 
		backgroundColor:'black'
});
	loginView.add(okButton);
	
var guestButton = Ti.UI.createButton
({
	title: 'Guest',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'25%',
		height: '10%',
		top: '3%',
		left: '60%',
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'20sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
	loginView.add(guestButton);
	
var createAccountButton = Ti.UI.createButton
({
	title: 'Create Account',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'48%',
		height: '10%',
		top: '3%',
		left: '15%',
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'20sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
	loginView.add(createAccountButton);
	
var forgotpwButton = Ti.UI.createButton
({
	title: 'Forgot Password',
		color:'black',
		height:Ti.UI.FILL,
		width:'50%',
		height: '8%',
		top: '58%',
		textAlign:'Left',
		font:{
			fontSize:'15sp',
			fontWeight:'bold'
		},
});			
	loginView.add(forgotpwButton);		

createAccountButton.addEventListener('click', function (e){ ///////EVENT LISTENERS//////////////////////////////
	CreateAccount();
});

okButton.addEventListener('click', function(e){
	sports();
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////											CREATE ACCOUNT PAGE  									/////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CreateAccount() 
{
var win55 = Titanium.UI.createWindow({
title: 'Create New Account',
backgroundColor: '#000000'
});

var textbox55 = Titanium.UI.createTextField({
borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color:'#000000',
top: 90,
left: 155,
width: 155,
height: 35,
font:{fontSize:14}
});

var textbox56 = Titanium.UI.createTextField({
borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color:'#000000',
top: 140,
left: 155,
width: 155,
height: 35,
font:{fontSize:14}
});

var textbox57 = Titanium.UI.createTextField({
borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color:'#000000',
top: 190,
left: 155,
width: 155,
height: 35,
font:{fontSize:14}
});

var textbox58 = Titanium.UI.createTextField({
borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color:'#000000',
top: 240,
left: 155,
width: 155,
height: 35,
font:{fontSize:14}
});

var textbox59 = Titanium.UI.createTextField({
borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color:'#000000',
top: 290,
left: 155,
width: 155,
height: 35,
font:{fontSize:14}
});

var label55 = Titanium.UI.createLabel({
color: '#DAA520',
text: 'First Name',
top: 90,
left:20,
font: {fontSize: 20} 
});

var label56 = Titanium.UI.createLabel({
color: '#DAA520',
text: 'Last Name',
top: 140,
left:20,
font: {fontSize: 20} 
});

var label57 = Titanium.UI.createLabel({
color: '#DAA520',
text: 'Email',
top: 190,
left:20,
font: {fontSize: 20} 
});

var label58 = Titanium.UI.createLabel({
color: '#DAA520',
text: 'Password',
top: 240,
left:20,
font: {fontSize: 20} 
});

var label59 = Titanium.UI.createLabel({
color: '#DAA520',
text: 'Re-enter Password',
top: 295,
left:20,
font: {fontSize: 15} 
});

var label60 = Titanium.UI.createLabel({
color: '#BCC6CC',
text: 'Create New Account',
top: 5,
left: 140,
font: {fontSize:30}
});

var button55 = Titanium.UI.createButton({
title: 'SUBMIT',
top: 400,
left: 110,
width: 100,
height: 50,
});

button55.addEventListener('click', function(e){
	sports();
});

win55.add(textbox55);
win55.add(textbox56);
win55.add(textbox57);
win55.add(textbox58);
win55.add(textbox59);
win55.add(label55);
win55.add(label56);
win55.add(label57);
win55.add(label58);
win55.add(label59);
win55.add(label60);
win55.add(button55);
win55.open();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////											Full Page View											//////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ViewFull() {
var viewFullWind = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var textArea = Ti.UI.createTextArea
({
  borderWidth: 2,
  borderColor: '#B8860B',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  text:'Full',
  top: 100,
  width: 300, height : 340,
  editable:false
});
viewFullWind.add(textArea);

var label1 = Ti.UI.createLabel
({
  color: 'black',
  font: { fontSize:20 },
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3,
  text: 'Text',
  textAlign: 'center',
  top: 20,
  width: 300, height: 70
});
viewFullWind.add(label1);

var label2 = Ti.UI.createLabel
({
  color: 'black',
  font: { fontSize:15 },
  text: 'Date',
  textAlign: 'left',
  top: 70,
  width: 200, height: 40
});
viewFullWind.add(label2);

var button = Titanium.UI.createButton
({
   title: 'Return',
   top: 5,
   width: 100,
   height: 30,
   left: 5,
   backgroundColor:'#B8860B',
   borderWidth:1,
   borderColor:'black'
});
viewFullWind.add(button);

viewFullWind.open();

button.addEventListener('click', function(e){
	viewFullWind.close();
});

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////											SIDE BAR												//////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var view = Ti.UI.createView({
backgroundColor:'#d2b45b',
top:'20%',
left:'0%',
height:'100%',
width:'25%'
});


var button1 = Titanium.UI.createButton({
   title: 'Sports',
   font:{fontSize:'10sp'},
   top:'0%',
   width: '100%',
   height: '5%',
   borderWidth:1,
   borderColor:'black',
   backgroundColor:'#d2b45b'
});
view.add(button1);

var button2 = Titanium.UI.createButton({
   title: 'Campus News',
   font:{fontSize:'10sp'},
   top:'5%',
   width: '100%',
   height: '5%',
   borderWidth:1,
   borderColor:'black',
   backgroundColor:'#d2b45b'
});
view.add(button2);

var button3 = Titanium.UI.createButton({
   title: 'Campus Events',
   font:{fontSize:'10sp'},
   top:'10%',
   width: '100%',
   height: '5%',
   borderWidth:1,
   borderColor:'black',
   backgroundColor:'#d2b45b'
});
view.add(button3);

var button4 = Titanium.UI.createButton({
   title: 'Bblearn Updates',
   font:{fontSize:'10sp'},
   top:'15%',
   width: '100%',
   height: '5%',
   borderWidth:1,
   borderColor:'black',
   backgroundColor:'#d2b45b'
});
view.add(button4);

button1.addEventListener('click', function(e){sports();});
button2.addEventListener('click', function(e) {CampusNews();});
button3.addEventListener('click', function(e){CampusEvents();});
button4.addEventListener('click',function(e){bblearn();});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////										SPORTS PAGE													////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sports() {
var sportsWind = Ti.UI.createWindow 
({
	backgroundColor: '#d2b45b'
});

var sportsWindTitle = Ti.UI.createView
({
	backgroundImage: '/Images/Summer-Sand-Volleyball.jpg',
	
	top: 0,
	width: '100%',
	height: '20%'
});
sportsWind.add(sportsWindTitle);
var sportsWindLabel = Ti.UI.createLabel
({
	text: 'Sports',
	right:'10%',
	font:{
		fontSize:'45sp'
	}
	
});
sportsWindTitle.add(sportsWindLabel);
var story1 = Ti.UI.createView/////////////////////Story 1//////////////////////////////////////////////////
({
	top: '20%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});
sportsWind.add(story1);
var title1 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Sports Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
story1.add(title1);
 
var text1 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
story1.add(text1);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
story1.add(uicommons);///////////
story1.addEventListener('click', function(e){
	ViewFull();
});
var story2 = Ti.UI.createView/////////////////////Story 2//////////////////////////////////////////////////
({
	top: '40%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
	
});
sportsWind.add(story2);
var title2 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
story2.add(title2);
var text2 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
story2.add(text2);
var uicommons2 = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
story2.add(uicommons2);

var story3 = Ti.UI.createView/////////////////////Story 3//////////////////////////////////////////////////
({
	top: '60%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
	
});
sportsWind.add(story3);
var title3 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
story3.add(title3);
var text3 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
story3.add(text3);
var uicommons3 = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
story3.add(uicommons3);

var story4 = Ti.UI.createView/////////////////////Story 4//////////////////////////////////////////////////
({
	top: '80%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
	
});
sportsWind.add(story4);
var title4 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
story4.add(title4);
var text4 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
story4.add(text4);
var uicommons4 = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
story4.add(uicommons4);

sportsWind.add(view);



sportsWind.open();


}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////										CAMPUS NEWS PAGE											////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function CampusNews() {														//cNW = Campus News Window //
var cNW = Ti.UI.createWindow 												//cNT = Campus News Title //
({																			//cNL = Campus News Label //	
	backgroundColor: '#d2b45b'												//cNS = Campus News Story //	
});																			//cNTE = Campus News Text //
																			////////////////////////////
var cNT = Ti.UI.createView
({
	backgroundImage: '/Images/Summer-Sand-Volleyball.jpg',
	top: 0,
	width: '100%',
	height: '20%'
});
cNW.add(cNT);
var cNL = Ti.UI.createLabel
({
	text: 'Campus News',
	right:'10%',
	font:{
		fontSize:'45sp'
	}
});
cNT.add(cNL);
var cNS1 = Ti.UI.createView /////////CAMPUS NEWS STORY 1//////////////////////////////////////////////////////////
({
	top: '20%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});

var cNT1 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Campus News Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
cNS1.add(cNT1);
var cNTE1 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
cNS1.add(cNTE1);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
cNS1.add(uicommons);
cNS1.addEventListener('click', function(e){
	ViewFull();
});
cNW.add(cNS1);
var cNS2 = Ti.UI.createView/////////CAMPUS NEWS STORY 2//////////////////////////////////////////////////////////
({
	top: '40%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});

var cNT2 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
cNS2.add(cNT2);
var cNTE2 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
cNS2.add(cNTE2);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
cNS2.add(uicommons);
cNS2.addEventListener('click', function(e){
	ViewFull();
});
cNW.add(cNS2);
var cNS3 = Ti.UI.createView/////////CAMPUS NEWS STORY 3/////////////////////////////////////////////////////////
({
	top: '60%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});

var cNT3 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
cNS3.add(cNT3);
var cNTE3 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
cNS3.add(cNTE3);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
cNS3.add(uicommons);
cNS3.addEventListener('click', function(e){
	ViewFull();
});
cNW.add(cNS3);
var cNS4 = Ti.UI.createView/////////CAMPUS NEWS STORY 4//////////////////////////////////////////////////////////
({
	top: '80%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});

var cNT4 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
cNS4.add(cNT4);
var cNTE4 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
cNS4.add(cNTE4);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
cNS4.add(uicommons);
cNS4.addEventListener('click', function(e){
	ViewFull();
});
cNW.add(cNS4);
cNW.add(view);

cNW.open();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////										CAMPUS EVENTS PAGE											////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function CampusEvents() {											//cEW = Campus Events Window//
var cEW = Ti.UI.createWindow 										//cET = Campus Events Title //
({																	//cEL = Campus Events Label //
	backgroundColor: '#d2b45b'										//cES = Campus Events Story //
});																	//cETE = Campus Events Text //
																	//////////////////////////////
var cET = Ti.UI.createView											
({																		
	backgroundImage: '/Images/Summer-Sand-Volleyball.jpg',
	top: 0,
	width: '100%',
	height: '20%'
});
cEW.add(cET);
var cEL = Ti.UI.createLabel
({
	text: 'Campus Events',
	right:'10%',
	font:{
		fontSize:'45sp'
	}
});
cET.add(cEL);
var cES1 = Ti.UI.createView /////////CAMPUS EVENTS STORY 1///////////////////////////////////////////////////////
({
	top: '20%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});
cEW.add(cES1);
var cET1 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Barker Trading Competition',
	color:'black',
	font:{fontSize:'25sp'}
});
cES1.add(cET1);
var cETE1 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'April 13 - April 24\n ALB 203/n 8:00am - 5:00pm',
	color: 'black'
});
cES1.add(cETE1);

var barkerTrading = Ti.UI.createImageView
({
	Image: '/Images/barkerTrading.jpeg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
cES1.add(barkerTrading);
cES1.addEventListener('click', function(e){
	ViewFull();
});

var cES2 = Ti.UI.createView/////////CAMPUS EVENTS STORY 2//////////////////////////////////////////////////////////
({
	top: '40%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});
cEW.add(cES2);
var cET2 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Josh Collette - Fish And Wildlife Seminar',
	color:'black',
	font:{fontSize:'20sp'}
});
cES2.add(cET2);
var cETE2 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'April 13 11:30am - 12:30pm',
	color: 'black'
});
cES2.add(cETE2);
var FishandWildlife = Ti.UI.createImageView
({
	Image: '/Images/FishandWildlife.jpeg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
cES2.add(FishandWildlife);
cES2.addEventListener('click', function(e){
	ViewFull();
});

var cES3 = Ti.UI.createView/////////CAMPUS EVENTS STORY 3//////////////////////////////////////////////////////////
({
	top: '60%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});
cEW.add(cES3);
var cET3 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
cES3.add(cET3);
var cETE3 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
cES3.add(cETE3);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
cES3.add(uicommons);
cES3.addEventListener('click', function(e){
	ViewFull();
});

var cES4 = Ti.UI.createView/////////CAMPUS EVENTS STORY 4//////////////////////////////////////////////////////////
({
	top: '80%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});
cEW.add(cES4);
var cET4 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
cES4.add(cET4);
var cETE4 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
cES4.add(cETE4);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
cES4.add(uicommons);
cES4.addEventListener('click', function(e){
	ViewFull();
});

cEW.add(view);

cEW.open();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////										BBLEARN UPDATES PAGE										////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function bblearn() {												//bbLW = bblearn Window//
var bbLW = Ti.UI.createWindow 										//bbLT = bblearn Title //
({																	//bbLL = bblearn Label //
	backgroundColor: '#d2b45b'										//bbLS = bblearn Story //
});																	//bbLTE = bblearn Text //
																	/////////////////////////
var bbLT = Ti.UI.createView											
({																		
	backgroundImage: '/Images/Summer-Sand-Volleyball.jpg',
	top: 0,
	width: '100%',
	height: '20%'
});
bbLW.add(bbLT);
var bbLL = Ti.UI.createLabel
({
	text: 'Bblearn Updates',
	right:'10%',
	font:{
		fontSize:'45sp'
	}
});
bbLT.add(bbLL);
var bbLU1 = Ti.UI.createView /////////BBLEARN UPDATE 1////////////////////////////////////////////////////////////
({
	top: '20%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});
bbLW.add(bbLU1);
var bbLT1 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Bblearn update 1',
	color:'black',
	font:{fontSize:'45sp'}
});
bbLU1.add(bbLT1);
var bbLTE1 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
bbLU1.add(bbLTE1);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
bbLU1.add(uicommons);
bbLU1.addEventListener('click', function(e){
	ViewFull();
});

var bbLU2 = Ti.UI.createView/////////BBLEARN UPDATE 2//////////////////////////////////////////////////////////
({
	top: '40%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});
bbLW.add(bbLU2);
var bbLT2 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
bbLU2.add(bbLT2);		
var bbLTE2 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
bbLU2.add(bbLTE2);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
bbLU2.add(uicommons);
bbLU2.addEventListener('click', function(e){
	ViewFull();
});

var bbLU3 = Ti.UI.createView/////////BBLEARN UPDATE 3//////////////////////////////////////////////////////////
({
	top: '60%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});
bbLW.add(bbLU3);
var bbLT3 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
bbLU3.add(bbLT3);
var bbLTE3 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
bbLU3.add(bbLTE3);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
bbLU3.add(uicommons);
bbLU3.addEventListener('click', function(e){
	ViewFull();
});

var bbLU4 = Ti.UI.createView/////////BBLEARN UPDATE 4////////////////////////////////////////////////////////
({
	top: '80%',
	height: '18%',
	width: '72%',
	borderColor:'black',
	backgroundColor:'#4c4c4c',
	right:'3%'
});
bbLW.add(bbLU4);
var bbLT4 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
bbLU4.add(bbLT4);
var bbLTE4 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'This is the first story\n something else',
	color: 'black'
});
bbLU4.add(bbLTE4);
var uicommons = Ti.UI.createImageView
({
	Image: '/Images/uicommons.jpg',
	top: 0,
	right: 0,
	height: '100%',
	width: '30%'
});
bbLU4.add(uicommons);
bbLU4.addEventListener('click', function(e){
	ViewFull();
});

bbLW.add(view);

bbLW.open();
}

