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
	var nameElement = document.getElementById("tokszin");
    var TF = nameElement.value;
	
	
	
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
	
	 var headID = document.getElementsByTagName("head")[0]; 
    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.innerHTML = "tok"+TF+"()";	
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
function a101_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_1_1.png' />";}
function a101_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_2_1.png' />";}
function a101_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_3_1.png' />";}
function a101_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_4_1.png' />";}
function a101_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_5_1.png' />";}
function a101_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_6_1.png' />";}
function a101_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_7_1.png' />";}
function a101_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_8_1.png' />";}
function a101_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_9_1.png' />";}
function a101_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_10_1.png' />";}
function a101_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/101_11_1.png' />";}
function a102_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_1_1.png' />";}
function a102_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_2_1.png' />";}
function a102_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_3_1.png' />";}
function a102_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_4_1.png' />";}
function a102_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_5_1.png' />";}
function a102_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_6_1.png' />";}
function a102_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_7_1.png' />";}
function a102_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_8_1.png' />";}
function a102_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_9_1.png' />";}
function a102_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_10_1.png' />";}
function a102_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/102_11_1.png' />";}
function a103_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_1_1.png' />";}
function a103_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_2_1.png' />";}
function a103_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_3_1.png' />";}
function a103_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_4_1.png' />";}
function a103_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_5_1.png' />";}
function a103_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_6_1.png' />";}
function a103_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_7_1.png' />";}
function a103_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_8_1.png' />";}
function a103_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_9_1.png' />";}
function a103_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_10_1.png' />";}
function a103_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/103_11_1.png' />";}
function a104_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_1_1.png' />";}
function a104_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_2_1.png' />";}
function a104_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_3_1.png' />";}
function a104_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_4_1.png' />";}
function a104_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_5_1.png' />";}
function a104_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_6_1.png' />";}
function a104_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_7_1.png' />";}
function a104_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_8_1.png' />";}
function a104_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_9_1.png' />";}
function a104_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_10_1.png' />";}
function a104_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/104_11_1.png' />";}
function a105_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_1_1.png' />";}
function a105_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_2_1.png' />";}
function a105_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_3_1.png' />";}
function a105_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_4_1.png' />";}
function a105_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_5_1.png' />";}
function a105_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_6_1.png' />";}
function a105_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_7_1.png' />";}
function a105_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_8_1.png' />";}
function a105_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_9_1.png' />";}
function a105_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_10_1.png' />";}
function a105_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/105_11_1.png' />";}
function a106_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_1_1.png' />";}
function a106_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_2_1.png' />";}
function a106_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_3_1.png' />";}
function a106_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_4_1.png' />";}
function a106_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_5_1.png' />";}
function a106_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_6_1.png' />";}
function a106_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_7_1.png' />";}
function a106_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_8_1.png' />";}
function a106_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_9_1.png' />";}
function a106_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_10_1.png' />";}
function a106_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/106_11_1.png' />";}
function a107_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_1_1.png' />";}
function a107_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_2_1.png' />";}
function a107_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_3_1.png' />";}
function a107_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_4_1.png' />";}
function a107_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_5_1.png' />";}
function a107_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_6_1.png' />";}
function a107_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_7_1.png' />";}
function a107_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_8_1.png' />";}
function a107_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_9_1.png' />";}
function a107_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_10_1.png' />";}
function a107_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/107_11_1.png' />";}
function a108_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_1_1.png' />";}
function a108_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_2_1.png' />";}
function a108_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_3_1.png' />";}
function a108_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_4_1.png' />";}
function a108_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_5_1.png' />";}
function a108_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_6_1.png' />";}
function a108_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_7_1.png' />";}
function a108_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_8_1.png' />";}
function a108_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_9_1.png' />";}
function a108_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_10_1.png' />";}
function a108_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/108_11_1.png' />";}
function a109_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_1_1.png' />";}
function a109_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_2_1.png' />";}
function a109_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_3_1.png' />";}
function a109_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_4_1.png' />";}
function a109_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_5_1.png' />";}
function a109_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_6_1.png' />";}
function a109_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_7_1.png' />";}
function a109_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_8_1.png' />";}
function a109_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_9_1.png' />";}
function a109_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_10_1.png' />";}
function a109_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/109_11_1.png' />";}
function a110_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_1_1.png' />";}
function a110_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_2_1.png' />";}
function a110_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_3_1.png' />";}
function a110_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_4_1.png' />";}
function a110_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_5_1.png' />";}
function a110_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_6_1.png' />";}
function a110_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_7_1.png' />";}
function a110_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_8_1.png' />";}
function a110_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_9_1.png' />";}
function a110_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_10_1.png' />";}
function a110_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/110_11_1.png' />";}


function a101_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_1_2.png' />";}
function a101_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_2_2.png' />";}
function a101_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_3_2.png' />";}
function a101_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_4_2.png' />";}
function a101_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_5_2.png' />";}
function a101_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_6_2.png' />";}
function a101_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_7_2.png' />";}
function a101_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_8_2.png' />";}
function a101_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_9_2.png' />";}
function a101_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_10_2.png' />";}
function a101_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/101_11_2.png' />";}
function a102_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_1_2.png' />";}
function a102_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_2_2.png' />";}
function a102_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_3_2.png' />";}
function a102_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_4_2.png' />";}
function a102_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_5_2.png' />";}
function a102_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_6_2.png' />";}
function a102_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_7_2.png' />";}
function a102_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_8_2.png' />";}
function a102_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_9_2.png' />";}
function a102_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_10_2.png' />";}
function a102_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/102_11_2.png' />";}
function a103_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_1_2.png' />";}
function a103_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_2_2.png' />";}
function a103_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_3_2.png' />";}
function a103_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_4_2.png' />";}
function a103_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_5_2.png' />";}
function a103_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_6_2.png' />";}
function a103_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_7_2.png' />";}
function a103_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_8_2.png' />";}
function a103_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_9_2.png' />";}
function a103_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_10_2.png' />";}
function a103_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/103_11_2.png' />";}
function a104_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_1_2.png' />";}
function a104_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_2_2.png' />";}
function a104_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_3_2.png' />";}
function a104_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_4_2.png' />";}
function a104_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_5_2.png' />";}
function a104_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_6_2.png' />";}
function a104_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_7_2.png' />";}
function a104_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_8_2.png' />";}
function a104_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_9_2.png' />";}
function a104_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_10_2.png' />";}
function a104_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/104_11_2.png' />";}
function a105_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_1_2.png' />";}
function a105_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_2_2.png' />";}
function a105_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_3_2.png' />";}
function a105_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_4_2.png' />";}
function a105_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_5_2.png' />";}
function a105_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_6_2.png' />";}
function a105_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_7_2.png' />";}
function a105_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_8_2.png' />";}
function a105_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_9_2.png' />";}
function a105_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_10_2.png' />";}
function a105_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/105_11_2.png' />";}
function a106_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_1_2.png' />";}
function a106_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_2_2.png' />";}
function a106_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_3_2.png' />";}
function a106_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_4_2.png' />";}
function a106_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_5_2.png' />";}
function a106_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_6_2.png' />";}
function a106_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_7_2.png' />";}
function a106_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_8_2.png' />";}
function a106_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_9_2.png' />";}
function a106_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_10_2.png' />";}
function a106_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/106_11_2.png' />";}
function a107_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_1_2.png' />";}
function a107_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_2_2.png' />";}
function a107_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_3_2.png' />";}
function a107_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_4_2.png' />";}
function a107_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_5_2.png' />";}
function a107_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_6_2.png' />";}
function a107_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_7_2.png' />";}
function a107_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_8_2.png' />";}
function a107_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_9_2.png' />";}
function a107_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_10_2.png' />";}
function a107_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/107_11_2.png' />";}
function a108_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_1_2.png' />";}
function a108_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_2_2.png' />";}
function a108_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_3_2.png' />";}
function a108_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_4_2.png' />";}
function a108_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_5_2.png' />";}
function a108_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_6_2.png' />";}
function a108_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_7_2.png' />";}
function a108_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_8_2.png' />";}
function a108_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_9_2.png' />";}
function a108_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_10_2.png' />";}
function a108_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/108_11_2.png' />";}
function a109_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_1_2.png' />";}
function a109_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_2_2.png' />";}
function a109_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_3_2.png' />";}
function a109_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_4_2.png' />";}
function a109_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_5_2.png' />";}
function a109_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_6_2.png' />";}
function a109_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_7_2.png' />";}
function a109_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_8_2.png' />";}
function a109_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_9_2.png' />";}
function a109_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_10_2.png' />";}
function a109_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/109_11_2.png' />";}
function a110_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_1_2.png' />";}
function a110_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_2_2.png' />";}
function a110_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_3_2.png' />";}
function a110_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_4_2.png' />";}
function a110_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_5_2.png' />";}
function a110_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_6_2.png' />";}
function a110_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_7_2.png' />";}
function a110_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_8_2.png' />";}
function a110_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_9_2.png' />";}
function a110_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_10_2.png' />";}
function a110_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/110_11_2.png' />";}


function a201_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_1_1.png' />";}
function a201_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_2_1.png' />";}
function a201_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_3_1.png' />";}
function a201_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_4_1.png' />";}
function a201_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_5_1.png' />";}
function a201_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_6_1.png' />";}
function a201_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_7_1.png' />";}
function a201_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_8_1.png' />";}
function a201_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_9_1.png' />";}
function a201_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_10_1.png' />";}
function a201_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_11_1.png' />";}
function a201_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/201_12_1.png' />";}
function a202_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_1_1.png' />";}
function a202_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_2_1.png' />";}
function a202_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_3_1.png' />";}
function a202_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_4_1.png' />";}
function a202_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_5_1.png' />";}
function a202_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_6_1.png' />";}
function a202_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_7_1.png' />";}
function a202_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_8_1.png' />";}
function a202_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_9_1.png' />";}
function a202_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_10_1.png' />";}
function a202_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_11_1.png' />";}
function a202_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/202_12_1.png' />";}
function a203_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_1_1.png' />";}
function a203_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_2_1.png' />";}
function a203_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_3_1.png' />";}
function a203_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_4_1.png' />";}
function a203_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_5_1.png' />";}
function a203_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_6_1.png' />";}
function a203_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_7_1.png' />";}
function a203_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_8_1.png' />";}
function a203_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_9_1.png' />";}
function a203_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_10_1.png' />";}
function a203_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_11_1.png' />";}
function a203_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/203_12_1.png' />";}
function a204_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_1_1.png' />";}
function a204_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_2_1.png' />";}
function a204_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_3_1.png' />";}
function a204_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_4_1.png' />";}
function a204_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_5_1.png' />";}
function a204_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_6_1.png' />";}
function a204_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_7_1.png' />";}
function a204_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_8_1.png' />";}
function a204_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_9_1.png' />";}
function a204_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_10_1.png' />";}
function a204_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_11_1.png' />";}
function a204_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/204_12_1.png' />";}
function a205_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_1_1.png' />";}
function a205_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_2_1.png' />";}
function a205_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_3_1.png' />";}
function a205_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_4_1.png' />";}
function a205_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_5_1.png' />";}
function a205_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_6_1.png' />";}
function a205_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_7_1.png' />";}
function a205_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_8_1.png' />";}
function a205_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_9_1.png' />";}
function a205_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_10_1.png' />";}
function a205_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_11_1.png' />";}
function a205_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/205_12_1.png' />";}
function a206_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_1_1.png' />";}
function a206_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_2_1.png' />";}
function a206_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_3_1.png' />";}
function a206_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_4_1.png' />";}
function a206_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_5_1.png' />";}
function a206_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_6_1.png' />";}
function a206_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_7_1.png' />";}
function a206_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_8_1.png' />";}
function a206_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_9_1.png' />";}
function a206_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_10_1.png' />";}
function a206_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_11_1.png' />";}
function a206_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/206_12_1.png' />";}


function a201_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_1_2.png' />";}
function a201_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_2_2.png' />";}
function a201_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_3_2.png' />";}
function a201_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_4_2.png' />";}
function a201_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_5_2.png' />";}
function a201_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_6_2.png' />";}
function a201_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_7_2.png' />";}
function a201_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_8_2.png' />";}
function a201_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_9_2.png' />";}
function a201_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_10_2.png' />";}
function a201_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_11_2.png' />";}
function a201_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/201_12_2.png' />";}
function a202_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_1_2.png' />";}
function a202_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_2_2.png' />";}
function a202_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_3_2.png' />";}
function a202_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_4_2.png' />";}
function a202_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_5_2.png' />";}
function a202_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_6_2.png' />";}
function a202_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_7_2.png' />";}
function a202_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_8_2.png' />";}
function a202_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_9_2.png' />";}
function a202_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_10_2.png' />";}
function a202_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_11_2.png' />";}
function a202_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/202_12_2.png' />";}
function a203_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_1_2.png' />";}
function a203_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_2_2.png' />";}
function a203_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_3_2.png' />";}
function a203_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_4_2.png' />";}
function a203_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_5_2.png' />";}
function a203_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_6_2.png' />";}
function a203_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_7_2.png' />";}
function a203_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_8_2.png' />";}
function a203_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_9_2.png' />";}
function a203_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_10_2.png' />";}
function a203_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_11_2.png' />";}
function a203_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/203_12_2.png' />";}
function a204_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_1_2.png' />";}
function a204_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_2_2.png' />";}
function a204_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_3_2.png' />";}
function a204_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_4_2.png' />";}
function a204_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_5_2.png' />";}
function a204_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_6_2.png' />";}
function a204_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_7_2.png' />";}
function a204_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_8_2.png' />";}
function a204_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_9_2.png' />";}
function a204_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_10_2.png' />";}
function a204_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_11_2.png' />";}
function a204_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/204_12_2.png' />";}
function a205_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_1_2.png' />";}
function a205_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_2_2.png' />";}
function a205_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_3_2.png' />";}
function a205_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_4_2.png' />";}
function a205_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_5_2.png' />";}
function a205_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_6_2.png' />";}
function a205_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_7_2.png' />";}
function a205_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_8_2.png' />";}
function a205_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_9_2.png' />";}
function a205_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_10_2.png' />";}
function a205_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_11_2.png' />";}
function a205_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/205_12_2.png' />";}
function a206_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_1_2.png' />";}
function a206_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_2_2.png' />";}
function a206_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_3_2.png' />";}
function a206_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_4_2.png' />";}
function a206_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_5_2.png' />";}
function a206_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_6_2.png' />";}
function a206_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_7_2.png' />";}
function a206_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_8_2.png' />";}
function a206_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_9_2.png' />";}
function a206_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_10_2.png' />";}
function a206_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_11_2.png' />";}
function a206_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/206_12_2.png' />";}


function a301_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_1_1.png' />";}
function a301_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_2_1.png' />";}
function a301_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_3_1.png' />";}
function a301_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_4_1.png' />";}
function a301_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_5_1.png' />";}
function a301_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_6_1.png' />";}
function a301_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_7_1.png' />";}
function a301_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_8_1.png' />";}
function a301_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_9_1.png' />";}
function a301_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_10_1.png' />";}
function a301_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_11_1.png' />";}
function a301_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_12_1.png' />";}
function a302_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_1_1.png' />";}
function a302_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_2_1.png' />";}
function a302_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_3_1.png' />";}
function a302_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_4_1.png' />";}
function a302_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_5_1.png' />";}
function a302_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_6_1.png' />";}
function a302_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_7_1.png' />";}
function a302_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_8_1.png' />";}
function a302_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_9_1.png' />";}
function a302_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_10_1.png' />";}
function a302_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_11_1.png' />";}
function a302_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_12_1.png' />";}
function a303_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_1_1.png' />";}
function a303_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_2_1.png' />";}
function a303_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_3_1.png' />";}
function a303_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_4_1.png' />";}
function a303_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_5_1.png' />";}
function a303_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_6_1.png' />";}
function a303_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_7_1.png' />";}
function a303_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_8_1.png' />";}
function a303_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_9_1.png' />";}
function a303_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_10_1.png' />";}
function a303_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_11_1.png' />";}
function a303_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_12_1.png' />";}
function a304_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_1_1.png' />";}
function a304_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_2_1.png' />";}
function a304_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_3_1.png' />";}
function a304_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_4_1.png' />";}
function a304_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_5_1.png' />";}
function a304_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_6_1.png' />";}
function a304_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_7_1.png' />";}
function a304_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_8_1.png' />";}
function a304_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_9_1.png' />";}
function a304_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_10_1.png' />";}
function a304_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_11_1.png' />";}
function a304_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_12_1.png' />";}


function a301_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_1_1.png' />";}
function a301_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_2_1.png' />";}
function a301_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_3_1.png' />";}
function a301_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_4_1.png' />";}
function a301_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_5_1.png' />";}
function a301_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_6_1.png' />";}
function a301_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_7_1.png' />";}
function a301_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_8_1.png' />";}
function a301_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_9_1.png' />";}
function a301_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_10_1.png' />";}
function a301_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_11_1.png' />";}
function a301_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/301_12_1.png' />";}
function a302_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_1_1.png' />";}
function a302_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_2_1.png' />";}
function a302_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_3_1.png' />";}
function a302_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_4_1.png' />";}
function a302_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_5_1.png' />";}
function a302_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_6_1.png' />";}
function a302_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_7_1.png' />";}
function a302_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_8_1.png' />";}
function a302_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_9_1.png' />";}
function a302_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_10_1.png' />";}
function a302_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_11_1.png' />";}
function a302_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/302_12_1.png' />";}
function a303_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_1_1.png' />";}
function a303_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_2_1.png' />";}
function a303_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_3_1.png' />";}
function a303_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_4_1.png' />";}
function a303_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_5_1.png' />";}
function a303_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_6_1.png' />";}
function a303_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_7_1.png' />";}
function a303_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_8_1.png' />";}
function a303_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_9_1.png' />";}
function a303_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_10_1.png' />";}
function a303_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_11_1.png' />";}
function a303_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/303_12_1.png' />";}
function a304_1_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_1_1.png' />";}
function a304_2_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_2_1.png' />";}
function a304_3_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_3_1.png' />";}
function a304_4_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_4_1.png' />";}
function a304_5_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_5_1.png' />";}
function a304_6_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_6_1.png' />";}
function a304_7_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_7_1.png' />";}
function a304_8_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_8_1.png' />";}
function a304_9_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_9_1.png' />";}
function a304_10_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_10_1.png' />";}
function a304_11_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_11_1.png' />";}
function a304_12_1() {document.getElementById('minta').innerHTML="<img src='PNG/304_12_1.png' />";}


function a301_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_1_2.png' />";}
function a301_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_2_2.png' />";}
function a301_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_3_2.png' />";}
function a301_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_4_2.png' />";}
function a301_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_5_2.png' />";}
function a301_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_6_2.png' />";}
function a301_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_7_2.png' />";}
function a301_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_8_2.png' />";}
function a301_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_9_2.png' />";}
function a301_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_10_2.png' />";}
function a301_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_11_2.png' />";}
function a301_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/301_12_2.png' />";}
function a302_1_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_1_2.png' />";}
function a302_2_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_2_2.png' />";}
function a302_3_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_3_2.png' />";}
function a302_4_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_4_2.png' />";}
function a302_5_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_5_2.png' />";}
function a302_6_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_6_2.png' />";}
function a302_7_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_7_2.png' />";}
function a302_8_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_8_2.png' />";}
function a302_9_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_9_2.png' />";}
function a302_10_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_10_2.png' />";}
function a302_11_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_11_2.png' />";}
function a302_12_2() {document.getElementById('minta').innerHTML="<img src='PNG/302_12_2.png' />";}



//alap színek
function foila1() {document.getElementById('folia').innerHTML="<img src='folia/a1.jpg' />";} 
function foila3() {document.getElementById('folia').innerHTML="<img src='folia/a3.jpg' />";}
function foila4() {document.getElementById('folia').innerHTML="<img src='folia/a4.jpg' />";} 
function foila5() {document.getElementById('folia').innerHTML="<img src='folia/a5.jpg' />";}
function foila1() {document.getElementById('folia').innerHTML="<img src='folia/a1.jpg' />";} 
function foila3() {document.getElementById('folia').innerHTML="<img src='folia/a3.jpg' />";}
function foila4() {document.getElementById('folia').innerHTML="<img src='folia/a4.jpg' />";} 
function foila5() {document.getElementById('folia').innerHTML="<img src='folia/a5.jpg' />";}
function foila6() {document.getElementById('folia').innerHTML="<img src='folia/a6.jpg' />";} 
function foila7() {document.getElementById('folia').innerHTML="<img src='folia/a7.jpg' />";}
function foila9() {document.getElementById('folia').innerHTML="<img src='folia/a9.jpg' />";} 
function foila13() {document.getElementById('folia').innerHTML="<img src='folia/a13.jpg' />";}
function foilb64() {document.getElementById('folia').innerHTML="<img src='folia/b64.jpg' />";}
function foilb65() {document.getElementById('folia').innerHTML="<img src='folia/b65.jpg' />";} 
function foilb66() {document.getElementById('folia').innerHTML="<img src='folia/b66.jpg' />";} 
function foilb67() {document.getElementById('folia').innerHTML="<img src='folia/b67.jpg' />";} 
function foilb68() {document.getElementById('folia').innerHTML="<img src='folia/b68.jpg' />";} 
function foilb69() {document.getElementById('folia').innerHTML="<img src='folia/b69.jpg' />";} 
function foilb70() {document.getElementById('folia').innerHTML="<img src='folia/b70.jpg' />";} 
function foilb71() {document.getElementById('folia').innerHTML="<img src='folia/b71.jpg' />";} 
function foilb72() {document.getElementById('folia').innerHTML="<img src='folia/b72.jpg' />";} 
function foilb73() {document.getElementById('folia').innerHTML="<img src='folia/b73.jpg' />";} 
function foilb74() {document.getElementById('folia').innerHTML="<img src='folia/b74.jpg' />";} 
function foilb75() {document.getElementById('folia').innerHTML="<img src='folia/b75.jpg' />";} 
function foilb76() {document.getElementById('folia').innerHTML="<img src='folia/b76.jpg' />";} 
function foilb77() {document.getElementById('folia').innerHTML="<img src='folia/b77.jpg' />";} 
function foilb79() {document.getElementById('folia').innerHTML="<img src='folia/b79.jpg' />";} 
function foilb81() {document.getElementById('folia').innerHTML="<img src='folia/b81.jpg' />";} 
function foilb83() {document.getElementById('folia').innerHTML="<img src='folia/b83.jpg' />";} 
function foilb84() {document.getElementById('folia').innerHTML="<img src='folia/b84.jpg' />";} 
function foilb85() {document.getElementById('folia').innerHTML="<img src='folia/b85.jpg' />";} 
function foilb86() {document.getElementById('folia').innerHTML="<img src='folia/b86.jpg' />";} 
function foilb87() {document.getElementById('folia').innerHTML="<img src='folia/b87.jpg' />";} 
function foilb88() {document.getElementById('folia').innerHTML="<img src='folia/b88.jpg' />";} 
function foilb89() {document.getElementById('folia').innerHTML="<img src='folia/b89.jpg' />";} 
function foilb90() {document.getElementById('folia').innerHTML="<img src='folia/b90.jpg' />";} 
function foilb91() {document.getElementById('folia').innerHTML="<img src='folia/b91.jpg' />";} 
function foilb92() {document.getElementById('folia').innerHTML="<img src='folia/b92.jpg' />";} 
function foilb93() {document.getElementById('folia').innerHTML="<img src='folia/b93.jpg' />";} 
function foilb94() {document.getElementById('folia').innerHTML="<img src='folia/b94.jpg' />";} 
function foilb121() {document.getElementById('folia').innerHTML="<img src='folia/b121.jpg' />";} 
function foilb122() {document.getElementById('folia').innerHTML="<img src='folia/b122.jpg' />";} 
function foilb123() {document.getElementById('folia').innerHTML="<img src='folia/b123.jpg' />";} 
function foilb126() {document.getElementById('folia').innerHTML="<img src='folia/b126.jpg' />";} 
function foilb127() {document.getElementById('folia').innerHTML="<img src='folia/b127.jpg' />";} 
function foilb128() {document.getElementById('folia').innerHTML="<img src='folia/b128.jpg' />";} 
function foilb129() {document.getElementById('folia').innerHTML="<img src='folia/b129.jpg' />";} 
function foilb130() {document.getElementById('folia').innerHTML="<img src='folia/b130.jpg' />";} 
function foilb140() {document.getElementById('folia').innerHTML="<img src='folia/b140z.jpg' />";} 
function foilb141() {document.getElementById('folia').innerHTML="<img src='folia/b141z.jpg' />";} 
function foilb142() {document.getElementById('folia').innerHTML="<img src='folia/b142.jpg' />";} 
function foilb143() {document.getElementById('folia').innerHTML="<img src='folia/b143.jpg' />";} 
function foilb200() {document.getElementById('folia').innerHTML="<img src='folia/b200.jpg' />";} 
function foilb201() {document.getElementById('folia').innerHTML="<img src='folia/b201.jpg' />";} 
function foilb202() {document.getElementById('folia').innerHTML="<img src='folia/b202.jpg' />";} 
function foilb203() {document.getElementById('folia').innerHTML="<img src='folia/b203.jpg' />";}
function foilb204() {document.getElementById('folia').innerHTML="<img src='folia/b204.jpg' />";} 
function foilb205() {document.getElementById('folia').innerHTML="<img src='folia/b205.jpg' />";} 
function foilb206() {document.getElementById('folia').innerHTML="<img src='folia/b206.jpg' />";}
function foilc10() {document.getElementById('folia').innerHTML="<img src='folia/c10.jpg' />";} 
function foilc11() {document.getElementById('folia').innerHTML="<img src='folia/c11.jpg' />";} 
function foilc12() {document.getElementById('folia').innerHTML="<img src='folia/c12.jpg' />";} 
function foilc13() {document.getElementById('folia').innerHTML="<img src='folia/c13.jpg' />";} 
function foilc14() {document.getElementById('folia').innerHTML="<img src='folia/c14.jpg' />";} 
function foilc15() {document.getElementById('folia').innerHTML="<img src='folia/c15.jpg' />";} 
function foilc17() {document.getElementById('folia').innerHTML="<img src='folia/c17.jpg' />";} 
function foilc18() {document.getElementById('folia').innerHTML="<img src='folia/c18.jpg' />";} 
function foilc19() {document.getElementById('folia').innerHTML="<img src='folia/c19.jpg' />";} 
function foilc20() {document.getElementById('folia').innerHTML="<img src='folia/c20.jpg' />";} 
function foilc21() {document.getElementById('folia').innerHTML="<img src='folia/c21.jpg' />";} 
function foilc22() {document.getElementById('folia').innerHTML="<img src='folia/c22.jpg' />";} 
function foilc63() {document.getElementById('folia').innerHTML="<img src='folia/c63.jpg' />";} 
function foilnat() {document.getElementById('folia').innerHTML="<img src='folia/ures.jpg' />";}


//tok színek
function toka1() {document.getElementById('tok').innerHTML="<img src='tok/a1.png' />";}
function toka3() {document.getElementById('tok').innerHTML="<img src='tok/a3.png' />";}
function toka4() {document.getElementById('tok').innerHTML="<img src='tok/a4.png' />";}
function toka5() {document.getElementById('tok').innerHTML="<img src='tok/a5.png' />";}
function toka1() {document.getElementById('tok').innerHTML="<img src='tok/a1.png' />";} 
function toka3() {document.getElementById('tok').innerHTML="<img src='tok/a3.png' />";}
function toka4() {document.getElementById('tok').innerHTML="<img src='tok/a4.png' />";} 
function toka5() {document.getElementById('tok').innerHTML="<img src='tok/a5.png' />";}
function toka6() {document.getElementById('tok').innerHTML="<img src='tok/a6.png' />";} 
function toka7() {document.getElementById('tok').innerHTML="<img src='tok/a7.png' />";}
function toka9() {document.getElementById('tok').innerHTML="<img src='tok/a9.png' />";} 
function toka13() {document.getElementById('tok').innerHTML="<img src='tok/a13.png' />";}
function tokb64() {document.getElementById('tok').innerHTML="<img src='tok/b64.png' />";}
function tokb65() {document.getElementById('tok').innerHTML="<img src='tok/b65.png' />";}  
function tokb66() {document.getElementById('tok').innerHTML="<img src='tok/b66.png' />";} 
function tokb67() {document.getElementById('tok').innerHTML="<img src='tok/b67.png' />";} 
function tokb68() {document.getElementById('tok').innerHTML="<img src='tok/b68.png' />";} 
function tokb69() {document.getElementById('tok').innerHTML="<img src='tok/b69.png' />";} 
function tokb70() {document.getElementById('tok').innerHTML="<img src='tok/b70.png' />";} 
function tokb71() {document.getElementById('tok').innerHTML="<img src='tok/b71.png' />";} 
function tokb72() {document.getElementById('tok').innerHTML="<img src='tok/b72.png' />";} 
function tokb73() {document.getElementById('tok').innerHTML="<img src='tok/b73.png' />";} 
function tokb74() {document.getElementById('tok').innerHTML="<img src='tok/b74.png' />";} 
function tokb75() {document.getElementById('tok').innerHTML="<img src='tok/b75.png' />";} 
function tokb76() {document.getElementById('tok').innerHTML="<img src='tok/b76.png' />";} 
function tokb77() {document.getElementById('tok').innerHTML="<img src='tok/b77.png' />";} 
function tokb79() {document.getElementById('tok').innerHTML="<img src='tok/b79.png' />";} 
function tokb81() {document.getElementById('tok').innerHTML="<img src='tok/b81.png' />";} 
function tokb83() {document.getElementById('tok').innerHTML="<img src='tok/b83.png' />";} 
function tokb84() {document.getElementById('tok').innerHTML="<img src='tok/b84.png' />";} 
function tokb85() {document.getElementById('tok').innerHTML="<img src='tok/b85.png' />";} 
function tokb86() {document.getElementById('tok').innerHTML="<img src='tok/b86.png' />";} 
function tokb87() {document.getElementById('tok').innerHTML="<img src='tok/b87.png' />";} 
function tokb88() {document.getElementById('tok').innerHTML="<img src='tok/b88.png' />";} 
function tokb89() {document.getElementById('tok').innerHTML="<img src='tok/b89.png' />";} 
function tokb90() {document.getElementById('tok').innerHTML="<img src='tok/b90.png' />";} 
function tokb91() {document.getElementById('tok').innerHTML="<img src='tok/b91.png' />";} 
function tokb92() {document.getElementById('tok').innerHTML="<img src='tok/b92.png' />";} 
function tokb93() {document.getElementById('tok').innerHTML="<img src='tok/b93.png' />";} 
function tokb94() {document.getElementById('tok').innerHTML="<img src='tok/b94.png' />";} 
function tokb121() {document.getElementById('tok').innerHTML="<img src='tok/b121.png' />";} 
function tokb122() {document.getElementById('tok').innerHTML="<img src='tok/b122.png' />";} 
function tokb123() {document.getElementById('tok').innerHTML="<img src='tok/b123.png' />";} 
function tokb126() {document.getElementById('tok').innerHTML="<img src='tok/b126.png' />";} 
function tokb127() {document.getElementById('tok').innerHTML="<img src='tok/b127.png' />";} 
function tokb128() {document.getElementById('tok').innerHTML="<img src='tok/b128.png' />";} 
function tokb129() {document.getElementById('tok').innerHTML="<img src='tok/b129.png' />";} 
function tokb130() {document.getElementById('tok').innerHTML="<img src='tok/b130.png' />";} 
function tokb140() {document.getElementById('tok').innerHTML="<img src='tok/b140z.png' />";} 
function tokb141() {document.getElementById('tok').innerHTML="<img src='tok/b141z.png' />";} 
function tokb142() {document.getElementById('tok').innerHTML="<img src='tok/b142.png' />";} 
function tokb143() {document.getElementById('tok').innerHTML="<img src='tok/b143.png' />";} 
function tokb200() {document.getElementById('tok').innerHTML="<img src='tok/b200.png' />";} 
function tokb201() {document.getElementById('tok').innerHTML="<img src='tok/b201.png' />";} 
function tokb202() {document.getElementById('tok').innerHTML="<img src='tok/b202.png' />";} 
function tokb203() {document.getElementById('tok').innerHTML="<img src='tok/b203.png' />";}
function tokb204() {document.getElementById('tok').innerHTML="<img src='tok/b204.png' />";} 
function tokb205() {document.getElementById('tok').innerHTML="<img src='tok/b205.png' />";} 
function tokb206() {document.getElementById('tok').innerHTML="<img src='tok/b206.png' />";} 
function tokc10() {document.getElementById('tok').innerHTML="<img src='tok/c10.png' />";} 
function tokc11() {document.getElementById('tok').innerHTML="<img src='tok/c11.png' />";} 
function tokc12() {document.getElementById('tok').innerHTML="<img src='tok/c12.png' />";} 
function tokc13() {document.getElementById('tok').innerHTML="<img src='tok/c13.png' />";} 
function tokc14() {document.getElementById('tok').innerHTML="<img src='tok/c14.png' />";} 
function tokc15() {document.getElementById('tok').innerHTML="<img src='tok/c15.png' />";} 
function tokc17() {document.getElementById('tok').innerHTML="<img src='tok/c17.png' />";} 
function tokc18() {document.getElementById('tok').innerHTML="<img src='tok/c18.png' />";} 
function tokc19() {document.getElementById('tok').innerHTML="<img src='tok/c19.png' />";} 
function tokc20() {document.getElementById('tok').innerHTML="<img src='tok/c20.png' />";} 
function tokc21() {document.getElementById('tok').innerHTML="<img src='tok/c21.png' />";} 
function tokc22() {document.getElementById('tok').innerHTML="<img src='tok/c22.png' />";} 
function tokc63() {document.getElementById('tok').innerHTML="<img src='tok/c63.png' />";} 
function toknat() {document.getElementById('tok').innerHTML="<img src='tok/ures.png' />";}