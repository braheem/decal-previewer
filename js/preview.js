window.onload = function(){
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
		var file = fileInput.files[0];
		var imageType = /image.*/;

		if (file.type.match(imageType)) {
			var reader = new FileReader();

			reader.onload = function(e) {

				// Create a new image.
				var div = document.createElement('div');
				div.id = "layer1cont";
				div.style.display = "inline-block";
				
				var img = new Image();
				//set image id
				img.id = "layer1";
				// Set the img src property using the data URL.
				img.src = reader.result;
				img.style.zIndex = "10";
				img.position = "absolute";
				img.style.maxHeight = "100%";
				img.style.maxWidth = "100%";
				div.appendChild(img);
				fileDisplayArea.appendChild(div);
				
				$('#layer1').resizable();
				$('#layer1cont').draggable();
				
			}
			reader.readAsDataURL(file); 

		} else {
		  fileDisplayArea.innerHTML = "File not supported!";
		}
    });
	
	
	$('#layer2').resizable();
	$('#layer2cont').draggable();
	
	//flip decal horizontally
	$('#flipD').click(function() {
		$('#layer2').toggleClass('flipHorizontal');
	});
	
	//flip vehicle horizontally
	$('#flipV').click(function() {
		$('#layer1').toggleClass('flipHorizontal');
	});
	
	/* //rotate decal 90 degrees
	document.getElementById("rotateV").onclick = function(){
		var curr_value = document.getElementById('layer1cont').style.transform;
		var new_value = "rotate(90deg)";
		if(curr_value !== ""){
			var new_rotate = parseInt(curr_value.replace("rotate(","").replace(")","")) + 90;
			new_value = "rotate(" + new_rotate + "deg)";

		}
		document.getElementById('layer1cont').style.transform = new_value;
	}
	
	//rotate decal 90 degrees
	document.getElementById("rotateD").onclick = function(){
		var curr_value = document.getElementById('layer2cont').style.transform;
		var new_value = "rotate(90deg)";
		if(curr_value !== ""){
			var new_rotate = parseInt(curr_value.replace("rotate(","").replace(")","")) + 90;
			new_value = "rotate(" + new_rotate + "deg)";

		}
		document.getElementById('layer2cont').style.transform = new_value;
	} */
}


