// JavaScript Document



function doIt() {
	
	var nameElement = document.getElementById("mintaszam");
    var M = nameElement.value;
	var nameElement = document.getElementById("oszt");
    var T = nameElement.value;
	var nameElement = document.getElementById("szal");
    var S = nameElement.value;
	var nameElement = document.getElementById("ajtoszam");
    var F = nameElement.value;
	
	
	
	
    var headID = document.getElementsByTagName("head")[0];
    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.innerHTML = "a"+M+"_"+T+"_"+S+"()";
    headID.appendChild(newScript);
	
	 var headID = document.getElementsByTagName("head")[0];
    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.innerHTML = "foil"+F+"()";
    headID.appendChild(newScript);
	
	
}

		
		function toggle() {
  // Get the DOM reference
  var contentId = document.getElementById("szal");
  // Toggle 
  contentId.value == "1" ? contentId.value = "2" : 
contentId.value = "1"; 
}

			

function change() // no ';' here
{
    var elem = document.getElementById("tokxin");
    if (elem.value=="BE") elem.value = "KI";
    else elem.value = "BE";
}


 function SHI(){
		document.getElementsByClassName('IIo')[0].style.display='none';
		document.getElementsByClassName('IIo')[1].style.display='none';
		document.getElementsByClassName('IIo')[2].style.display='none';
		document.getElementsByClassName('IIIo')[0].style.display='none';
		document.getElementsByClassName('IIIo')[1].style.display='none';
		document.getElementsByClassName('IIIo')[2].style.display='none';
		document.getElementsByClassName('Io')[0].style.display='inline';
		document.getElementsByClassName('Io')[1].style.display='inline'}
		
function SHII(){
		document.getElementsByClassName('Io')[0].style.display='none';
		document.getElementsByClassName('Io')[1].style.display='none';
		document.getElementsByClassName('IIIo')[0].style.display='none';
		document.getElementsByClassName('IIIo')[1].style.display='none';
		document.getElementsByClassName('IIIo')[2].style.display='none';
		document.getElementsByClassName('IIo')[0].style.display='inline';
		document.getElementsByClassName('IIo')[1].style.display='inline';
		document.getElementsByClassName('IIo')[2].style.display='inline'}

function SHIII(){
		document.getElementsByClassName('Io')[0].style.display='none';
		document.getElementsByClassName('Io')[1].style.display='none';
		document.getElementsByClassName('IIo')[0].style.display='none';
		document.getElementsByClassName('IIo')[1].style.display='none';
		document.getElementsByClassName('IIo')[2].style.display='none';
		document.getElementsByClassName('IIIo')[0].style.display='inline';
		document.getElementsByClassName('IIIo')[1].style.display='inline';
		document.getElementsByClassName('IIIo')[2].style.display='inline'}	
		


// marásminták
function aL1_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_1_1.png' />";}
function aL1_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_2_1.png' />";}
function aL1_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_3_1.png' />";}
function aL1_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_4_1.png' />";}
function aL1_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_5_1.png' />";}
function aL1_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_6_1.png' />";}
function aL1_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_7_1.png' />";}
function aL1_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_8_1.png' />";}
function aL1_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_9_1.png' />";}
function aL1_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_10_1.png' />";}
function aL1_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_11_1.png' />";}
function aL2_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_1_1.png' />";}
function aL2_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_2_1.png' />";}
function aL2_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_3_1.png' />";}
function aL2_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_4_1.png' />";}
function aL2_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_5_1.png' />";}
function aL2_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_6_1.png' />";}
function aL2_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_7_1.png' />";}
function aL2_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_8_1.png' />";}
function aL2_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_9_1.png' />";}
function aL2_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_10_1.png' />";}
function aL2_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_11_1.png' />";}
function aL3_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_1_1.png' />";}
function aL3_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_2_1.png' />";}
function aL3_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_3_1.png' />";}
function aL3_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_4_1.png' />";}
function aL3_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_5_1.png' />";}
function aL3_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_6_1.png' />";}
function aL3_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_7_1.png' />";}
function aL3_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_8_1.png' />";}
function aL3_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_9_1.png' />";}
function aL3_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_10_1.png' />";}
function aL3_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_11_1.png' />";}
function aL4_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_1_1.png' />";}
function aL4_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_2_1.png' />";}
function aL4_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_3_1.png' />";}
function aL4_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_4_1.png' />";}
function aL4_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_5_1.png' />";}
function aL4_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_6_1.png' />";}
function aL4_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_7_1.png' />";}
function aL4_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_8_1.png' />";}
function aL4_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_9_1.png' />";}
function aL4_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_10_1.png' />";}
function aL4_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_11_1.png' />";}
function aL5_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_1_1.png' />";}
function aL5_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_2_1.png' />";}
function aL5_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_3_1.png' />";}
function aL5_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_4_1.png' />";}
function aL5_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_5_1.png' />";}
function aL5_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_6_1.png' />";}
function aL5_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_7_1.png' />";}
function aL5_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_8_1.png' />";}
function aL5_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_9_1.png' />";}
function aL5_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_10_1.png' />";}
function aL5_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_11_1.png' />";}
function aL6_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_1_1.png' />";}
function aL6_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_2_1.png' />";}
function aL6_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_3_1.png' />";}
function aL6_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_4_1.png' />";}
function aL6_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_5_1.png' />";}
function aL6_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_6_1.png' />";}
function aL6_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_7_1.png' />";}
function aL6_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_8_1.png' />";}
function aL6_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_9_1.png' />";}
function aL6_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_10_1.png' />";}
function aL6_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_11_1.png' />";}
function aL7_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_1_1.png' />";}
function aL7_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_2_1.png' />";}
function aL7_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_3_1.png' />";}
function aL7_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_4_1.png' />";}
function aL7_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_5_1.png' />";}
function aL7_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_6_1.png' />";}
function aL7_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_7_1.png' />";}
function aL7_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_8_1.png' />";}
function aL7_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_9_1.png' />";}
function aL7_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_10_1.png' />";}
function aL7_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_11_1.png' />";}
function aL8_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_1_1.png' />";}
function aL8_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_2_1.png' />";}
function aL8_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_3_1.png' />";}
function aL8_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_4_1.png' />";}
function aL8_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_5_1.png' />";}
function aL8_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_6_1.png' />";}
function aL8_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_7_1.png' />";}
function aL8_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_8_1.png' />";}
function aL8_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_9_1.png' />";}
function aL8_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_10_1.png' />";}
function aL8_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_11_1.png' />";}
function aL9_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_1_1.png' />";}
function aL9_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_2_1.png' />";}
function aL9_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_3_1.png' />";}
function aL9_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_4_1.png' />";}
function aL9_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_5_1.png' />";}
function aL9_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_6_1.png' />";}
function aL9_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_7_1.png' />";}
function aL9_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_8_1.png' />";}
function aL9_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_9_1.png' />";}
function aL9_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_10_1.png' />";}
function aL9_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_11_1.png' />";}
function aL10_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_1_1.png' />";}
function aL10_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_2_1.png' />";}
function aL10_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_3_1.png' />";}
function aL10_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_4_1.png' />";}
function aL10_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_5_1.png' />";}
function aL10_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_6_1.png' />";}
function aL10_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_7_1.png' />";}
function aL10_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_8_1.png' />";}
function aL10_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_9_1.png' />";}
function aL10_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_10_1.png' />";}
function aL10_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_11_1.png' />";}


function aL1_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_1_2.png' />";}
function aL1_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_2_2.png' />";}
function aL1_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_3_2.png' />";}
function aL1_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_4_2.png' />";}
function aL1_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_5_2.png' />";}
function aL1_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_6_2.png' />";}
function aL1_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_7_2.png' />";}
function aL1_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_8_2.png' />";}
function aL1_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_9_2.png' />";}
function aL1_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_10_2.png' />";}
function aL1_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_11_2.png' />";}
function aL2_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_1_2.png' />";}
function aL2_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_2_2.png' />";}
function aL2_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_3_2.png' />";}
function aL2_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_4_2.png' />";}
function aL2_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_5_2.png' />";}
function aL2_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_6_2.png' />";}
function aL2_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_7_2.png' />";}
function aL2_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_8_2.png' />";}
function aL2_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_9_2.png' />";}
function aL2_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_10_2.png' />";}
function aL2_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_11_2.png' />";}
function aL3_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_1_2.png' />";}
function aL3_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_2_2.png' />";}
function aL3_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_3_2.png' />";}
function aL3_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_4_2.png' />";}
function aL3_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_5_2.png' />";}
function aL3_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_6_2.png' />";}
function aL3_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_7_2.png' />";}
function aL3_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_8_2.png' />";}
function aL3_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_9_2.png' />";}
function aL3_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_10_2.png' />";}
function aL3_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_11_2.png' />";}
function aL4_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_1_2.png' />";}
function aL4_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_2_2.png' />";}
function aL4_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_3_2.png' />";}
function aL4_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_4_2.png' />";}
function aL4_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_5_2.png' />";}
function aL4_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_6_2.png' />";}
function aL4_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_7_2.png' />";}
function aL4_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_8_2.png' />";}
function aL4_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_9_2.png' />";}
function aL4_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_10_2.png' />";}
function aL4_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_11_2.png' />";}
function aL5_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_1_2.png' />";}
function aL5_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_2_2.png' />";}
function aL5_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_3_2.png' />";}
function aL5_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_4_2.png' />";}
function aL5_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_5_2.png' />";}
function aL5_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_6_2.png' />";}
function aL5_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_7_2.png' />";}
function aL5_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_8_2.png' />";}
function aL5_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_9_2.png' />";}
function aL5_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_10_2.png' />";}
function aL5_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_11_2.png' />";}
function aL6_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_1_2.png' />";}
function aL6_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_2_2.png' />";}
function aL6_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_3_2.png' />";}
function aL6_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_4_2.png' />";}
function aL6_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_5_2.png' />";}
function aL6_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_6_2.png' />";}
function aL6_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_7_2.png' />";}
function aL6_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_8_2.png' />";}
function aL6_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_9_2.png' />";}
function aL6_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_10_2.png' />";}
function aL6_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_11_2.png' />";}
function aL7_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_1_2.png' />";}
function aL7_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_2_2.png' />";}
function aL7_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_3_2.png' />";}
function aL7_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_4_2.png' />";}
function aL7_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_5_2.png' />";}
function aL7_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_6_2.png' />";}
function aL7_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_7_2.png' />";}
function aL7_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_8_2.png' />";}
function aL7_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_9_2.png' />";}
function aL7_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_10_2.png' />";}
function aL7_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_11_2.png' />";}
function aL8_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_1_2.png' />";}
function aL8_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_2_2.png' />";}
function aL8_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_3_2.png' />";}
function aL8_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_4_2.png' />";}
function aL8_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_5_2.png' />";}
function aL8_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_6_2.png' />";}
function aL8_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_7_2.png' />";}
function aL8_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_8_2.png' />";}
function aL8_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_9_2.png' />";}
function aL8_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_10_2.png' />";}
function aL8_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_11_2.png' />";}
function aL9_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_1_2.png' />";}
function aL9_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_2_2.png' />";}
function aL9_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_3_2.png' />";}
function aL9_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_4_2.png' />";}
function aL9_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_5_2.png' />";}
function aL9_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_6_2.png' />";}
function aL9_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_7_2.png' />";}
function aL9_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_8_2.png' />";}
function aL9_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_9_2.png' />";}
function aL9_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_10_2.png' />";}
function aL9_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_11_2.png' />";}
function aL10_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_1_2.png' />";}
function aL10_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_2_2.png' />";}
function aL10_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_3_2.png' />";}
function aL10_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_4_2.png' />";}
function aL10_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_5_2.png' />";}
function aL10_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_6_2.png' />";}
function aL10_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_7_2.png' />";}
function aL10_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_8_2.png' />";}
function aL10_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_9_2.png' />";}
function aL10_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_10_2.png' />";}
function aL10_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_11_2.png' />";}


function aL11_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_1_1.png' />";}
function aL11_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_2_1.png' />";}
function aL11_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_3_1.png' />";}
function aL11_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_4_1.png' />";}
function aL11_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_5_1.png' />";}
function aL11_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_6_1.png' />";}
function aL11_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_7_1.png' />";}
function aL11_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_8_1.png' />";}
function aL11_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_9_1.png' />";}
function aL11_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_10_1.png' />";}
function aL11_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_11_1.png' />";}
function aL11_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_12_1.png' />";}
function aL12_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_1_1.png' />";}
function aL12_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_2_1.png' />";}
function aL12_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_3_1.png' />";}
function aL12_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_4_1.png' />";}
function aL12_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_5_1.png' />";}
function aL12_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_6_1.png' />";}
function aL12_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_7_1.png' />";}
function aL12_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_8_1.png' />";}
function aL12_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_9_1.png' />";}
function aL12_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_10_1.png' />";}
function aL12_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_11_1.png' />";}
function aL12_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_12_1.png' />";}
function aL13_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_1_1.png' />";}
function aL13_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_2_1.png' />";}
function aL13_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_3_1.png' />";}
function aL13_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_4_1.png' />";}
function aL13_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_5_1.png' />";}
function aL13_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_6_1.png' />";}
function aL13_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_7_1.png' />";}
function aL13_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_8_1.png' />";}
function aL13_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_9_1.png' />";}
function aL13_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_10_1.png' />";}
function aL13_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_11_1.png' />";}
function aL13_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_12_1.png' />";}
function aL14_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_1_1.png' />";}
function aL14_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_2_1.png' />";}
function aL14_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_3_1.png' />";}
function aL14_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_4_1.png' />";}
function aL14_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_5_1.png' />";}
function aL14_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_6_1.png' />";}
function aL14_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_7_1.png' />";}
function aL14_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_8_1.png' />";}
function aL14_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_9_1.png' />";}
function aL14_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_10_1.png' />";}
function aL14_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_11_1.png' />";}
function aL14_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_12_1.png' />";}
function aL15_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_1_1.png' />";}
function aL15_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_2_1.png' />";}
function aL15_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_3_1.png' />";}
function aL15_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_4_1.png' />";}
function aL15_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_5_1.png' />";}
function aL15_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_6_1.png' />";}
function aL15_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_7_1.png' />";}
function aL15_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_8_1.png' />";}
function aL15_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_9_1.png' />";}
function aL15_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_10_1.png' />";}
function aL15_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_11_1.png' />";}
function aL15_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_12_1.png' />";}
function aL16_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_1_1.png' />";}
function aL16_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_2_1.png' />";}
function aL16_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_3_1.png' />";}
function aL16_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_4_1.png' />";}
function aL16_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_5_1.png' />";}
function aL16_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_6_1.png' />";}
function aL16_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_7_1.png' />";}
function aL16_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_8_1.png' />";}
function aL16_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_9_1.png' />";}
function aL16_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_10_1.png' />";}
function aL16_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_11_1.png' />";}
function aL16_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_12_1.png' />";}


function aL11_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_1_2.png' />";}
function aL11_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_2_2.png' />";}
function aL11_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_3_2.png' />";}
function aL11_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_4_2.png' />";}
function aL11_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_5_2.png' />";}
function aL11_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_6_2.png' />";}
function aL11_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_7_2.png' />";}
function aL11_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_8_2.png' />";}
function aL11_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_9_2.png' />";}
function aL11_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_10_2.png' />";}
function aL11_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_11_2.png' />";}
function aL11_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_12_2.png' />";}
function aL12_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_1_2.png' />";}
function aL12_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_2_2.png' />";}
function aL12_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_3_2.png' />";}
function aL12_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_4_2.png' />";}
function aL12_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_5_2.png' />";}
function aL12_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_6_2.png' />";}
function aL12_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_7_2.png' />";}
function aL12_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_8_2.png' />";}
function aL12_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_9_2.png' />";}
function aL12_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_10_2.png' />";}
function aL12_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_11_2.png' />";}
function aL12_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_12_2.png' />";}
function aL13_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_1_2.png' />";}
function aL13_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_2_2.png' />";}
function aL13_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_3_2.png' />";}
function aL13_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_4_2.png' />";}
function aL13_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_5_2.png' />";}
function aL13_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_6_2.png' />";}
function aL13_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_7_2.png' />";}
function aL13_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_8_2.png' />";}
function aL13_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_9_2.png' />";}
function aL13_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_10_2.png' />";}
function aL13_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_11_2.png' />";}
function aL13_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_12_2.png' />";}
function aL14_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_1_2.png' />";}
function aL14_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_2_2.png' />";}
function aL14_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_3_2.png' />";}
function aL14_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_4_2.png' />";}
function aL14_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_5_2.png' />";}
function aL14_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_6_2.png' />";}
function aL14_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_7_2.png' />";}
function aL14_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_8_2.png' />";}
function aL14_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_9_2.png' />";}
function aL14_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_10_2.png' />";}
function aL14_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_11_2.png' />";}
function aL14_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_12_2.png' />";}
function aL15_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_1_2.png' />";}
function aL15_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_2_2.png' />";}
function aL15_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_3_2.png' />";}
function aL15_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_4_2.png' />";}
function aL15_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_5_2.png' />";}
function aL15_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_6_2.png' />";}
function aL15_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_7_2.png' />";}
function aL15_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_8_2.png' />";}
function aL15_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_9_2.png' />";}
function aL15_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_10_2.png' />";}
function aL15_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_11_2.png' />";}
function aL15_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_12_2.png' />";}
function aL16_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_1_2.png' />";}
function aL16_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_2_2.png' />";}
function aL16_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_3_2.png' />";}
function aL16_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_4_2.png' />";}
function aL16_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_5_2.png' />";}
function aL16_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_6_2.png' />";}
function aL16_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_7_2.png' />";}
function aL16_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_8_2.png' />";}
function aL16_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_9_2.png' />";}
function aL16_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_10_2.png' />";}
function aL16_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_11_2.png' />";}
function aL16_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_12_2.png' />";}



function aL17_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_1_1.png' />";}
function aL17_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_2_1.png' />";}
function aL17_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_3_1.png' />";}
function aL17_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_4_1.png' />";}
function aL17_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_5_1.png' />";}
function aL17_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_6_1.png' />";}
function aL17_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_7_1.png' />";}
function aL17_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_8_1.png' />";}
function aL17_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_9_1.png' />";}
function aL17_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_10_1.png' />";}
function aL17_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_11_1.png' />";}
function aL17_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_12_1.png' />";}
function aL18_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_1_1.png' />";}
function aL18_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_2_1.png' />";}
function aL18_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_3_1.png' />";}
function aL18_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_4_1.png' />";}
function aL18_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_5_1.png' />";}
function aL18_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_6_1.png' />";}
function aL18_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_7_1.png' />";}
function aL18_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_8_1.png' />";}
function aL18_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_9_1.png' />";}
function aL18_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_10_1.png' />";}
function aL18_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_11_1.png' />";}
function aL18_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_12_1.png' />";}
function aL19_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_1_1.png' />";}
function aL19_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_2_1.png' />";}
function aL19_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_3_1.png' />";}
function aL19_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_4_1.png' />";}
function aL19_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_5_1.png' />";}
function aL19_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_6_1.png' />";}
function aL19_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_7_1.png' />";}
function aL19_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_8_1.png' />";}
function aL19_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_9_1.png' />";}
function aL19_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_10_1.png' />";}
function aL19_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_11_1.png' />";}
function aL19_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_12_1.png' />";}
function aL20_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_1_1.png' />";}
function aL20_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_2_1.png' />";}
function aL20_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_3_1.png' />";}
function aL20_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_4_1.png' />";}
function aL20_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_5_1.png' />";}
function aL20_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_6_1.png' />";}
function aL20_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_7_1.png' />";}
function aL20_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_8_1.png' />";}
function aL20_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_9_1.png' />";}
function aL20_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_10_1.png' />";}
function aL20_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_11_1.png' />";}
function aL20_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_12_1.png' />";}


function aL17_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_1_1.png' />";}
function aL17_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_2_1.png' />";}
function aL17_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_3_1.png' />";}
function aL17_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_4_1.png' />";}
function aL17_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_5_1.png' />";}
function aL17_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_6_1.png' />";}
function aL17_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_7_1.png' />";}
function aL17_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_8_1.png' />";}
function aL17_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_9_1.png' />";}
function aL17_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_10_1.png' />";}
function aL17_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_11_1.png' />";}
function aL17_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_12_1.png' />";}
function aL18_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_1_1.png' />";}
function aL18_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_2_1.png' />";}
function aL18_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_3_1.png' />";}
function aL18_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_4_1.png' />";}
function aL18_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_5_1.png' />";}
function aL18_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_6_1.png' />";}
function aL18_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_7_1.png' />";}
function aL18_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_8_1.png' />";}
function aL18_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_9_1.png' />";}
function aL18_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_10_1.png' />";}
function aL18_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_11_1.png' />";}
function aL18_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_12_1.png' />";}
function aL19_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_1_1.png' />";}
function aL19_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_2_1.png' />";}
function aL19_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_3_1.png' />";}
function aL19_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_4_1.png' />";}
function aL19_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_5_1.png' />";}
function aL19_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_6_1.png' />";}
function aL19_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_7_1.png' />";}
function aL19_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_8_1.png' />";}
function aL19_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_9_1.png' />";}
function aL19_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_10_1.png' />";}
function aL19_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_11_1.png' />";}
function aL19_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_12_1.png' />";}
function aL20_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_1_1.png' />";}
function aL20_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_2_1.png' />";}
function aL20_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_3_1.png' />";}
function aL20_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_4_1.png' />";}
function aL20_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_5_1.png' />";}
function aL20_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_6_1.png' />";}
function aL20_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_7_1.png' />";}
function aL20_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_8_1.png' />";}
function aL20_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_9_1.png' />";}
function aL20_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_10_1.png' />";}
function aL20_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_11_1.png' />";}
function aL20_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_12_1.png' />";}


function aL17_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_1_2.png' />";}
function aL17_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_2_2.png' />";}
function aL17_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_3_2.png' />";}
function aL17_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_4_2.png' />";}
function aL17_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_5_2.png' />";}
function aL17_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_6_2.png' />";}
function aL17_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_7_2.png' />";}
function aL17_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_8_2.png' />";}
function aL17_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_9_2.png' />";}
function aL17_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_10_2.png' />";}
function aL17_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_11_2.png' />";}
function aL17_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_12_2.png' />";}
function aL18_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_1_2.png' />";}
function aL18_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_2_2.png' />";}
function aL18_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_3_2.png' />";}
function aL18_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_4_2.png' />";}
function aL18_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_5_2.png' />";}
function aL18_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_6_2.png' />";}
function aL18_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_7_2.png' />";}
function aL18_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_8_2.png' />";}
function aL18_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_9_2.png' />";}
function aL18_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_10_2.png' />";}
function aL18_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_11_2.png' />";}
function aL18_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_12_2.png' />";}



//alap színek

function foils1() {document.getElementById('folia').innerHTML="<img src='folia/s1.jpg' />";} 
function foils2() {document.getElementById('folia').innerHTML="<img src='folia/s2.jpg' />";}
function foils3() {document.getElementById('folia').innerHTML="<img src='folia/s3.jpg' />";} 
function foils4() {document.getElementById('folia').innerHTML="<img src='folia/s4.jpg' />";}
function foils5() {document.getElementById('folia').innerHTML="<img src='folia/s5.jpg' />";} 
function foils6() {document.getElementById('folia').innerHTML="<img src='folia/s6.jpg' />";}
function foils7() {document.getElementById('folia').innerHTML="<img src='folia/s7.jpg' />";} 
function foils8() {document.getElementById('folia').innerHTML="<img src='folia/s8.jpg' />";}
function foils9() {document.getElementById('folia').innerHTML="<img src='folia/s9.jpg' />";} 
function foils10() {document.getElementById('folia').innerHTML="<img src='folia/s10.jpg' />";} 
function foils11() {document.getElementById('folia').innerHTML="<img src='folia/s11.jpg' />";} 
function foils12() {document.getElementById('folia').innerHTML="<img src='folia/s12.jpg' />";} 
function foils13() {document.getElementById('folia').innerHTML="<img src='folia/s13.jpg' />";} 
function foils14() {document.getElementById('folia').innerHTML="<img src='folia/s14.jpg' />";} 
function foils15() {document.getElementById('folia').innerHTML="<img src='folia/s15.jpg' />";} 
function foils16() {document.getElementById('folia').innerHTML="<img src='folia/r1.jpg' />";} 
function foils17() {document.getElementById('folia').innerHTML="<img src='folia/r2.jpg' />";} 
function foils18() {document.getElementById('folia').innerHTML="<img src='folia/r3.jpg' />";} 
function foils19() {document.getElementById('folia').innerHTML="<img src='folia/r4.jpg' />";} 
function foils20() {document.getElementById('folia').innerHTML="<img src='folia/r5.jpg' />";} 
function foils21() {document.getElementById('folia').innerHTML="<img src='folia/r6.jpg' />";} 
function foils22() {document.getElementById('folia').innerHTML="<img src='folia/r7.jpg' />";} 
function foils23() {document.getElementById('folia').innerHTML="<img src='folia/r8.jpg' />";} 
function foils24() {document.getElementById('folia').innerHTML="<img src='folia/r9.jpg' />";} 
function foils25() {document.getElementById('folia').innerHTML="<img src='folia/r10.jpg' />";} 
function foils26() {document.getElementById('folia').innerHTML="<img src='folia/r11.jpg' />";} 
function foils27() {document.getElementById('folia').innerHTML="<img src='folia/r12.jpg' />";} 
function foils28() {document.getElementById('folia').innerHTML="<img src='folia/r13.jpg' />";} 
function foils29() {document.getElementById('folia').innerHTML="<img src='folia/r14.jpg' />";} 
function foils30() {document.getElementById('folia').innerHTML="<img src='folia/r15.jpg' />";} 
function foils31() {document.getElementById('folia').innerHTML="<img src='folia/r16.jpg' />";} 
function foils32() {document.getElementById('folia').innerHTML="<img src='folia/r17.jpg' />";} 
function foils33() {document.getElementById('folia').innerHTML="<img src='folia/r18.jpg' />";} 
function foils34() {document.getElementById('folia').innerHTML="<img src='folia/r19.jpg' />";} 
function foils35() {document.getElementById('folia').innerHTML="<img src='folia/r20.jpg' />";} 
function foils36() {document.getElementById('folia').innerHTML="<img src='folia/r21.jpg' />";} 
function foils37() {document.getElementById('folia').innerHTML="<img src='folia/r22.jpg' />";} 
function foils38() {document.getElementById('folia').innerHTML="<img src='folia/r23.jpg' />";} 
function foils39() {document.getElementById('folia').innerHTML="<img src='folia/r24.jpg' />";} 
function foils40() {document.getElementById('folia').innerHTML="<img src='folia/r25.jpg' />";} 
function foils41() {document.getElementById('folia').innerHTML="<img src='folia/r26.jpg' />";} 
function foils42() {document.getElementById('folia').innerHTML="<img src='folia/r27.jpg' />";} 
function foils43() {document.getElementById('folia').innerHTML="<img src='folia/r28.jpg' />";} 
function foils44() {document.getElementById('folia').innerHTML="<img src='folia/r29.jpg' />";} 
function foils45() {document.getElementById('folia').innerHTML="<img src='folia/r30.jpg' />";} 
function foils46() {document.getElementById('folia').innerHTML="<img src='folia/r31.jpg' />";} 
function foils47() {document.getElementById('folia').innerHTML="<img src='folia/r32.jpg' />";} 
function foils48() {document.getElementById('folia').innerHTML="<img src='folia/r33.jpg' />";} 
function foils49() {document.getElementById('folia').innerHTML="<img src='folia/r34.jpg' />";} 
function foils50() {document.getElementById('folia').innerHTML="<img src='folia/r35.jpg' />";}
function foils51() {document.getElementById('folia').innerHTML="<img src='folia/r36.jpg' />";} 
function foils52() {document.getElementById('folia').innerHTML="<img src='folia/r37.jpg' />";} 
function foils53() {document.getElementById('folia').innerHTML="<img src='folia/r38.jpg' />";}
function foils54() {document.getElementById('folia').innerHTML="<img src='folia/r39.jpg' />";} 
function foils55() {document.getElementById('folia').innerHTML="<img src='folia/r40.jpg' />";} 
function foils56() {document.getElementById('folia').innerHTML="<img src='folia/r41.jpg' />";} 
function foils57() {document.getElementById('folia').innerHTML="<img src='folia/r42.jpg' />";} 
function foils58() {document.getElementById('folia').innerHTML="<img src='folia/r43.jpg' />";} 
function foils59() {document.getElementById('folia').innerHTML="<img src='folia/r44.jpg' />";} 
function foils60() {document.getElementById('folia').innerHTML="<img src='folia/r45.jpg' />";} 
function foils61() {document.getElementById('folia').innerHTML="<img src='folia/r46.jpg' />";} 
function foils62() {document.getElementById('folia').innerHTML="<img src='folia/r47.jpg' />";} 
function foils63() {document.getElementById('folia').innerHTML="<img src='folia/r48.jpg' />";} 
function foils64() {document.getElementById('folia').innerHTML="<img src='folia/r49.jpg' />";} 
function foils65() {document.getElementById('folia').innerHTML="<img src='folia/r50.jpg' />";} 
function foils66() {document.getElementById('folia').innerHTML="<img src='folia/r51.jpg' />";} 
function foils67() {document.getElementById('folia').innerHTML="<img src='folia/r52.jpg' />";}

