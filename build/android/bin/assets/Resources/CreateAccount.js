var storyWind = Ti.UI.createWindow 
({
	backgroundColor: '#d2b45b'
});

var story1 = Ti.UI.createView
({
	top: '10%',
	height: '10%',
	width: '85%',
	borderColor:'black'
	
});
storyWind.add(story1);
var title1 = Ti.UI.createLabel
({
	top: 0,
	left: 0,
	text: 'Story 1',
	color:'black',
	font:{fontSize:'45sp'}
});
story1.add(title1);
var text1 = Ti.UI.createLabel
({
	top: '40%',
	left: 0,
	text: 'This is the first story',
	color: 'black'
});
story1.add(text1);
var backgroundImage = Ti.UI.createImageView
({
	backgroundImage: '/Images/uicommons.png',
	top: 0,
	right: 0,
	height: '100%',
	width: '10%'
});
story1.add(backgroundImage);

storyWind.open();





