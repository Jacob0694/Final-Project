Titanium.UI.setBackgroundColor('#000');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////												LOGIN PAGE											////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function homeFunc()
{
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
var fb = require('facebook');
fb.appid = 431808060330515;
fb.permissions = ['publish_stream'];
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});
    
loginView.add(fb.createLoginButton({
    top : '50%',
    style : fb.BUTTON_STYLE_WIDE
}));
createAccountButton.addEventListener('click', function (e){ ///////EVENT LISTENERS//////////////////////////////
	CreateAccount();
});
guestButton.addEventListener('click', function(e){
	sports();
});
okButton.addEventListener('click', function(e){
	sports();
});
forgotpwButton.addEventListener('click', function(e){
	Titanium.Platform.openURL('https://help.uidaho.edu/security/reset/');
});
}

homeFunc();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////											CREATE ACCOUNT PAGE  									/////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CreateAccount() 
{
var win55 = Titanium.UI.createWindow({
title: 'Create New Account',
backgroundColor: '#000000'
});
var picView = Ti.UI.createView
({
	top:16,
	left:11,
	height:'10%',
	width:'20%',
	backgroundImage:'Images/uofiseal.png'
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
borderColor:'#D2B45B',
borderRadius:10,
});

button55.addEventListener('click', function(e){options();});
win55.add(picView);
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
///////											OPTIONS PAGE 											//////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function options() {
var win1 = Titanium.UI.createWindow({
title:'Categories',
backgroundColor:'#D2B45B'
});
 
var label1 = Titanium.UI.createLabel({
color:'black',
text:'Preferences',
font:{fontSize:30,fontFamily:'Helvetica Neue'},
textAlign:'center',
top:'5%',
width:'auto'
});
var picView = Ti.UI.createView
({
	top:18,
	left:9,
	height:'10%',
	width:'20%',
	backgroundImage:'Images/uofiseal.png'
});
win1.add(picView);
var switch1 = Ti.UI.createSwitch({
value:true,
top:'20%',
left: '60%',
allignment:'left'
});
 
var label2 = Ti.UI.createLabel({
color:'black',
text:'Sports',
top:'20%',
left:'15%'
});
 
var switch2 = Ti.UI.createSwitch({
value:true,
top:'25%',
left: '60%',
allignment:'left',
});
 
var label3 = Ti.UI.createLabel({
color:'black',
text:'Campus Events',
top:'25%',
left:'15%'
});
 
var switch3 = Ti.UI.createSwitch({
value:true, 
top:'30%',
left: '60%',
allignment:'left', 
});

var label4 = Ti.UI.createLabel({
color:'black',
text:'Campus News',
top:'30%',
left:'15%' 
});

var switch4 = Ti.UI.createSwitch({
value:true,
top:'35%',
left: '60%',
allignment:'left', 
});

var label5 = Ti.UI.createLabel({
color:'black',
text:'Community News',
top:'35%',
left:'15%'
});
 
var switch5 = Ti.UI.createSwitch({
value:true,
top:'40%',
left: '60%',
allignment:'left',
});

var label6 = Ti.UI.createLabel({
color:'black',
text:'Maps',
top:'40%',
left:'15%'
});
 
var switch6 = Ti.UI.createSwitch({
value:true,
top:'45%',
left: '60%',
allignment:'left',
});
 
var label7 = Ti.UI.createLabel({
color:'black',
text:'Weather',
top:'45%',
left:'15%'
});
 
var switch7 = Ti.UI.createSwitch({
value:true,
top:'50%',
left: '60%',
allignment:'left',
});
 
var label8 = Ti.UI.createLabel({
color:'black',
text:'Campus Dining',
top:'50%',
left:'15%'
});
 
var switch8 = Ti.UI.createSwitch({
value:true,
top:'55%',
left: '60%',
allignment:'left',
});
 
var label9 = Ti.UI.createLabel({
color:'black',
text:'Academic Calendar',
top:'55%',
left:'15%'
});
 
var switch9 = Ti.UI.createSwitch({
value:true,
top:'60%',
left: '60%',
allignment:'left',
});
 
var label10 = Ti.UI.createLabel({
color:'black',
text:'BlackBoard Updates',
top:'60%',
left:'15%' 
});

var submissionButton = Ti.UI.createButton
({
	backgroundColor:'#d2b45b',
	borderColor:'black',
	borderRadius:'10',
	title:'Submit',
	color:'black',
	height:'6%',
	width:'17%',
	left:'20%',
	top:'70%'
});
var changePasswordButton = Ti.UI.createButton
({
	borderColor:'black',
	borderRadius:'10',
	title:'Change Password',
	color:'black',
	height:'6%',
	width:'35%',
	top:'80%',
	left:'20%'
});
win1.add(changePasswordButton);
win1.add(submissionButton);
win1.add(switch1);
win1.add(switch2);
win1.add(switch3);
win1.add(switch4);
win1.add(switch5);
win1.add(switch6);
win1.add(switch7);
win1.add(switch8);
win1.add(switch9);
win1.add(label1);
win1.add(label2);
win1.add(label3);
win1.add(label4);
win1.add(label5);
win1.add(label6);
win1.add(label7);
win1.add(label8);
win1.add(label9);
win1.add(label10);
 
switch1.addEventListener('change',function(e){
Ti.API.info('Switch value: ' + switch1.value);
});
 
switch2.addEventListener('change',function(e){
Ti.API.info('Switch value: ' + switch2.value);
});
 
switch3.addEventListener('change',function(e){
Ti.API.info('Switch value: ' + switch3.value);
});
 
switch4.addEventListener('change',function(e){
Ti.API.info('Switch value: ' + switch4.value);
});
 
switch5.addEventListener('change',function(e){
Ti.API.info('Switch value: ' + switch5.value);
});
 
switch6.addEventListener('change',function(e){
Ti.API.info('Switch value: ' + switch6.value);
});
 
switch7.addEventListener('change',function(e){
Ti.API.info('Switch value: ' + switch7.value);
});
 
switch8.addEventListener('change',function(e){
Ti.API.info('Switch value: ' + switch8.value);
});
 
switch9.addEventListener('change',function(e){
Ti.API.info('Switch value: ' + switch9.value);
});

submissionButton.addEventListener('click', function(e) {sports();});
changePasswordButton.addEventListener('click', function(e) {CreateAccount();});
Ti.API.info('Switch value: ' + switch1.value);
Ti.API.info('Switch value: ' + switch2.value);
Ti.API.info('Switch value: ' + switch3.value);
Ti.API.info('Switch value: ' + switch4.value);
Ti.API.info('Switch value: ' + switch5.value);
Ti.API.info('Switch value: ' + switch6.value);
Ti.API.info('Switch value: ' + switch7.value);
Ti.API.info('Switch value: ' + switch8.value);
Ti.API.info('Switch value: ' + switch9.value);
win1.open();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////											Full Page View											//////////

function ViewFull() {
var viewFullWind = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var textArea = Ti.UI.createLabel
({
  borderColor: '#B8860B',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  color:'black',
  font:{fontSize:'13sp'},
  top: '17%',
  width: '90%', height : '80%',
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
  text: 'Date 4/11/2015',
  left:'5%',
  top: 75,
  width: 200, height: 40
});
viewFullWind.add(label2);

var button = Titanium.UI.createButton
({
   title: 'Return',
   top: '5%',
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
width:'24%'
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
var logoutButton = Ti.UI.createButton
({
	title:'logout',
	font:{fontSize:'10sp'},
	color:'black',
	top:'20%',
	height:'5%',
	width:'100%',
	borderWidth:1,
	borderColor:'black',
	backgroundColor:'red'
});
view.add(logoutButton);
var preferences = Ti.UI.createButton
({
	title:'Preferences',
	font:{fontSize:'10sp'},
	color:'black',
	top:'25%',
	height:'5%',
	width:'100%',
	borderWidth:1,
	borderColor:'black',
	backgroundColor:'blue'
});
view.add(preferences);

button1.addEventListener('click', function(e){sports();});
button2.addEventListener('click', function(e) {CampusNews();});
button3.addEventListener('click', function(e){CampusEvents();});
button4.addEventListener('click',function(e){bblearn();});
logoutButton.addEventListener('click',function(e){homeFunc();});
preferences.addEventListener('click', function(e){options();});
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
	text: 'Vandal Football',
	color:'black',
	font:{fontSize:'25sp'}
});
story1.add(title1);
 
var text1 = Ti.UI.createLabel
({
	top: '47%',
	left: 0,
	text: 'Defense makes some noise',
	color: 'black'
});
story1.add(text1);
var football = Ti.UI.createImageView
({
	Image: '/Images/ESWSNOEGTDIMAEW.20150411214757.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
story1.add(football);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////											Full Page View											//////////

function fullSports1() {
var viewFullWind = Ti.UI.createWindow({
  backgroundColor: '#black'
});

var textArea = Ti.UI.createLabel
({
  borderColor: 'black',
  borderRadius: 5,
  backgroundColor:'#d2b45b',
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'center',
  text:"MOSCOW, Idaho – Once again, the University of Idaho football team’s offense put up some impressive numbers. But so, too, did the defense in the Vandals’ second scrimmage of the spring Saturday at the Kibbie Dome. While quarterbacks Matt Linehan and Jake Luton (with 16 yards from Gunnar Amos), combined for 649 yards, there was one interception and they were sent scampering around the backfield by a defensive unit that tallied 18 sacks and six hurries. Add an additional 11 pass breakups and it is easy to see why coach Paul Petrino had words of praise for the defense. This was probably the first scrimmage since I’ve been here where the defense got after the offense that much, said Petrino, who is in his third spring as the Vandals’ head coach. The last 50 plays, they really got after them. He wasn’t without words of praise for the offense as he commended, in particular, the play of receiver-turned-tight end Deon Watson as well as receivers Dezmon Epps, Jacob Sannon and Dave Ungerer. Epps led the way with nine catches for 165 yards with Watson accounting for 135 yards on six receptions. Ungerer had 106 yards on seven catches with Sannon adding 72 on seven. It was the defense, though, that impressed the most and again it was true freshman linebacker Kaden Elliss making an impact along with veteran defensive end Quinton Bradley. Elliss had 17 tackles, which includes five tackles for loss (one sack), with Bradley tallying 10 tackles with six of those tackles for losses (five being sacks). The guys up front played really well, Petrino said. We’re so much better than we’ve been. So much so, he said, he doesn’t even think of the past. I don’t want to compare to anything we’ve been, he said, I want to compare to where we need to be to win our conference. We’re just better all the way around.",
  color:'black',
  font:{fontSize:'13sp'},
  top: '17%',
  width: '93%', height : '80%',
  editable:false
});
viewFullWind.add(textArea);

var label1 = Ti.UI.createLabel
({
  color: '#d2b45b',
  font: { fontSize:'25sp' },
  text: 'Vandal Football',
  left: '40%',
  top: 17,
  width: 300, height: 70
});
viewFullWind.add(label1);
var headerPic = Ti.UI.createView
({
	backgroundImage:'/Images/ESWSNOEGTDIMAEW.20150411214757.jpg',
	left:5,
	top:14,
	height:70,
	width:'35%'
});
viewFullWind.add(headerPic);
var label2 = Ti.UI.createLabel
({
  color: '#d2b45b',
  font: { fontSize:15 },
  text: 'Date 4/11/2015',
  left:'5%',
  top: 75,
  width: 200, height: 40
});
viewFullWind.add(label2);

var button = Titanium.UI.createButton
({
   title: 'Return',
   color:'black',
   top: 75,
   width: 100,
   height: 30,
   left: '70%',
   backgroundColor:'#d2b45b',
   borderWidth:1,
   borderColor:'black'
});
viewFullWind.add(button);

viewFullWind.open();

button.addEventListener('click', function(e){
	viewFullWind.close();
});

}
story1.addEventListener('click', function(e){
	fullSports1();
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
	text: 'Vandal Tennis',
	color:'black',
	font:{fontSize:'25sp'}
});
story2.add(title2);
var text2 = Ti.UI.createLabel
({
	top: '47%',
	left: 0,
	text: 'Vandals Secure Tourney Spot',
	color: 'black'
});
story2.add(text2);
var tennis = Ti.UI.createImageView
({
	Image: '/Images/tennispic.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////											Full Page View											//////////

function fullSports2() {
var viewFullWind = Ti.UI.createWindow({
  backgroundColor: '#black'
});

var textArea = Ti.UI.createLabel
({
  borderColor: 'black',
  borderRadius: 5,
  backgroundColor:'#d2b45b',
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'center',
  text:"MOSCOW, Idaho – Once again, the University of Idaho football team’s offense put up some impressive numbers. But so, too, did the defense in the Vandals’ second scrimmage of the spring Saturday at the Kibbie Dome. While quarterbacks Matt Linehan and Jake Luton (with 16 yards from Gunnar Amos), combined for 649 yards, there was one interception and they were sent scampering around the backfield by a defensive unit that tallied 18 sacks and six hurries. Add an additional 11 pass breakups and it is easy to see why coach Paul Petrino had words of praise for the defense. This was probably the first scrimmage since I’ve been here where the defense got after the offense that much, said Petrino, who is in his third spring as the Vandals’ head coach. The last 50 plays, they really got after them. He wasn’t without words of praise for the offense as he commended, in particular, the play of receiver-turned-tight end Deon Watson as well as receivers Dezmon Epps, Jacob Sannon and Dave Ungerer. Epps led the way with nine catches for 165 yards with Watson accounting for 135 yards on six receptions. Ungerer had 106 yards on seven catches with Sannon adding 72 on seven. It was the defense, though, that impressed the most and again it was true freshman linebacker Kaden Elliss making an impact along with veteran defensive end Quinton Bradley. Elliss had 17 tackles, which includes five tackles for loss (one sack), with Bradley tallying 10 tackles with six of those tackles for losses (five being sacks). The guys up front played really well, Petrino said. We’re so much better than we’ve been. So much so, he said, he doesn’t even think of the past. I don’t want to compare to anything we’ve been, he said, I want to compare to where we need to be to win our conference. We’re just better all the way around.",
  color:'black',
  font:{fontSize:'13sp'},
  top: '17%',
  width: '93%', height : '80%',
  editable:false
});
viewFullWind.add(textArea);

var label1 = Ti.UI.createLabel
({
  color: '#d2b45b',
  font: { fontSize:'25sp' },
  text: 'Vandal Tennis',
  left: '40%',
  top: 17,
  width: 300, height: 70
});
viewFullWind.add(label1);
var headerPic = Ti.UI.createView
({
	backgroundImage:'/Images/tennispic.jpg',
	left:5,
	top:14,
	height:70,
	width:'35%'
});
viewFullWind.add(headerPic);
var label2 = Ti.UI.createLabel
({
  color: '#d2b45b',
  font: { fontSize:15 },
  text: 'Date 4/11/2015',
  left:'5%',
  top: 75,
  width: 200, height: 40
});
viewFullWind.add(label2);

var button = Titanium.UI.createButton
({
   title: 'Return',
   color:'black',
   top: 75,
   width: 100,
   height: 30,
   left: '70%',
   backgroundColor:'#d2b45b',
   borderWidth:1,
   borderColor:'black'
});
viewFullWind.add(button);

viewFullWind.open();

button.addEventListener('click', function(e){
	viewFullWind.close();
});

}

story2.addEventListener('click', function(e) {fullSports2();});
story2.add(tennis);

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
	text: 'Vandal Lady\n Soccer',
	color:'black',
	font:{fontSize:'25sp'}
});
story3.add(title3);
var text3 = Ti.UI.createLabel
({
	top: '53%',
	left: 0,
	text: 'Soccer Opens Spring Play',
	color: 'black'
});
story3.add(text3);
var soccer = Ti.UI.createImageView
({
	Image: '/Images/soccerpic.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////											Full Page View											//////////
function fullSports3() {
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
   top: '5%',
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
story3.addEventListener('click', function(e){fullSports3();});
story3.add(soccer);

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
	text: 'Vandal Golf',
	color:'black',
	font:{fontSize:'25sp'}
});
story4.add(title4);
var text4 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'Vandals Finish Second',
	color: 'black'
});
story4.add(text4);
var golf = Ti.UI.createImageView
({
	Image: '/Images/golfpicture.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////											Full Page View											//////////
function fullSports4() {
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
   top: '5%',
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
story4.addEventListener('click', function(e){fullSports4();});
story4.add(golf);

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
	backgroundImage: '/Images/campusnews.jpg',
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
	},
	top:'35%'
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
	text: 'BLOCK Fest',
	color:'black',
	font:{fontSize:'25sp'}
});
cNS1.add(cNT1);
var cNTE1 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'Teaches parents and children value of playing',
	color: 'black'
});
cNS1.add(cNTE1);
var blocks = Ti.UI.createImageView
({
	Image: '/Images/abc_blocks.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
cNS1.add(blocks);
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
	text: 'Engineering\n Inductions',
	color:'black',
	font:{fontSize:'25sp'}
});
cNS2.add(cNT2);
var cNTE2 = Ti.UI.createLabel
({
	top: '50%',
	left: 0,
	text: 'Idaho to induct 2015 academy of engineers',
	color: 'black'
});
cNS2.add(cNTE2);
var gears = Ti.UI.createImageView
({
	Image: '/Images/09engineering1.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
cNS2.add(gears);
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
	text: 'Commencement',
	color:'black',
	font:{fontSize:'25sp'}
});
cNS3.add(cNT3);
var cNTE3 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'Commencement ceremonies in 4 locations',
	color: 'black'
});
cNS3.add(cNTE3);
var hat = Ti.UI.createImageView
({
	Image: '/Images/graduation1.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
cNS3.add(hat);
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
	text: 'Association of\nLaw Schools',
	color:'black',
	font:{fontSize:'25sp'}
});
cNS4.add(cNT4);
var cNTE4 = Ti.UI.createLabel
({
	top: '52%',
	left: 0,
	text: 'Idaho becomes member of international association',
	color: 'black'
});
cNS4.add(cNTE4);
var law = Ti.UI.createImageView
({
	Image: '/Images/Law Portal.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
cNS4.add(law);
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
	backgroundImage: '/Images/campus events.jpg',
	top: 0,
	width: '100%',
	height: '20%'
});
cEW.add(cET);
var cEL = Ti.UI.createLabel
({
	text: 'Campus Events',
	color:'#d2b45b',
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
	top: '50%',
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
	height: '50%',
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
	text: 'Josh Collette - \nFish And Wildlife\nSeminar',
	color:'black',
	font:{fontSize:'25sp'}
});
cES2.add(cET2);
var cETE2 = Ti.UI.createLabel
({
	top: '71%',
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
	height: '50%',
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
	text: 'Moms Weekend',
	color:'black',
	font:{fontSize:'25sp'}
});
cES3.add(cET3);
var cETE3 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'Time for a visit from Mom',
	color: 'black'
});
cES3.add(cETE3);
var mom = Ti.UI.createImageView
({
	Image: '/Images/moms_2015_181x137.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
cES3.add(mom);
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
	text: 'Job Seeker\nTraining',
	color:'black',
	font:{fontSize:'25sp'}
});
cES4.add(cET4);
var cETE4 = Ti.UI.createLabel
({
	top: '48%',
	left: 0,
	text: 'Mental training for job seekers',
	color: 'black'
});
cES4.add(cETE4);
var brain = Ti.UI.createImageView
({
	Image: '/Images/brain1.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
cES4.add(brain);
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
	backgroundImage: '/Images/bblearn.jpg',
	top: 0,
	width: '100%',
	height: '20%'
});
bbLW.add(bbLT);

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
	text: 'Grade Posted',
	color:'black',
	font:{fontSize:'25sp'}
});
bbLU1.add(bbLT1);
var bbLTE1 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'BUS 301 Quiz Grade',
	color: 'black'
});
bbLU1.add(bbLTE1);
var learn = Ti.UI.createImageView
({
	Image: '/Images/a-plus-grade.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
bbLU1.add(learn);
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
	top: '5%',
	left: 0,
	text: 'Assignment\nAvailable',
	color:'black',
	font:{fontSize:'25sp'}
});
bbLU2.add(bbLT2);		
var bbLTE2 = Ti.UI.createLabel
({
	top: '50%',
	left: 0,
	text: 'BUS 353 assingment posted',
	color: 'black'
});
bbLU2.add(bbLTE2);
var learn1 = Ti.UI.createImageView
({
	Image: '/Images/a-plus-grade.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
bbLU2.add(learn1);
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
	text: 'Feedback posted',
	color:'black',
	font:{fontSize:'25sp'}
});
bbLU3.add(bbLT3);
var bbLTE3 = Ti.UI.createLabel
({
	top: '48%',
	left: 0,
	text: 'BUS 350 feedback completed',
	color: 'black'
});
bbLU3.add(bbLTE3);
var learn2 = Ti.UI.createImageView
({
	Image: '/Images/a-plus-grade.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
bbLU3.add(learn2);
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
	text: 'Test posted',
	color:'black',
	font:{fontSize:'25sp'}
});
bbLU4.add(bbLT4);
var bbLTE4 = Ti.UI.createLabel
({
	top: '45%',
	left: 0,
	text: 'BUS 454 test available',
	color: 'black'
});
bbLU4.add(bbLTE4);
var learn3 = Ti.UI.createImageView
({
	Image: '/Images/a-plus-grade.jpg',
	top: 0,
	right: 0,
	height: '50%',
	width: '30%'
});
bbLU4.add(learn3);
bbLU4.addEventListener('click', function(e){
	ViewFull();
});

bbLW.add(view);

bbLW.open();
}

