function ViewFull() {
var win = Ti.UI.createWindow({
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
  value: 'Full Text',
  top: 100,
  width: 300, height : 340,
  editable:false
});
win.add(textArea);

var label1 = Ti.UI.createLabel
({
  color: 'black',
  font: { fontSize:20 },
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3,
  text: 'Title',
  textAlign: 'center',
  top: 20,
  width: 300, height: 70
});
win.add(label1);

var label2 = Ti.UI.createLabel
({
  color: 'black',
  font: { fontSize:15 },
  text: 'Date',
  textAlign: 'left',
  top: 70,
  width: 200, height: 40
});
win.add(label2);

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
win.add(button);

win.open();
}

​module.exports = ViewFull;
