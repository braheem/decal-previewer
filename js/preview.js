$(window).load(function() {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
		var file = fileInput.files[0];
		var imageType = /image.*/;

		if (file.type.match(imageType)) {
			var reader = new FileReader();

			reader.onload = function(e) {
				
				// Create a new image.
				createImage("layer1", "layer1cont", "10", reader.result);
				
				
				createImage("layer2", "layer2cont", "20",  "/decal-previewer/img/eagledecal.png");
				
				
			}
			reader.readAsDataURL(file); 

		} else {
		  fileDisplayArea.innerHTML = "File not supported!";
		}
    });
	
	
	
	//flip decal horizontally
	$('#flipD').click(function() {
		$('#layer2').toggleClass('flipHorizontal');
	});
	
	//flip vehicle horizontally
	$('#flipV').click(function() {
		$('#layer1').toggleClass('flipHorizontal');
	});
	
	//hide/show resize icon
	$('#toggleIcon').click(function() {
		$('.ui-icon').toggleClass('hideIcon');
		$('.ui-widget-content').toggleClass('hideIcon');
	});
	
	function createImage(imgid, containerid, zIndex, imgsource){
	
		var div = document.createElement('div');
		div.id = containerid;
		div.style.display = "inline-block";
		div.style.zIndex = zIndex;
		div.position = "absolute";
		div.style.maxHeight = "100%";
		div.style.maxWidth = "100%";
		div.style.width = "100%";
		div.style.overflow = "hidden";
		
		var img = new Image();
		img.id = imgid;
		img.onload = function() {	
			img.position = "absolute";
			img.style.maxHeight = "100%";
			img.style.maxWidth = "100%";
			div.appendChild(img);
			fileDisplayArea.appendChild(div);
			$("#" + imgid).resizable();
			$("#" + containerid).draggable();
		}
		img.src = imgsource;
		
	}
	
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
});



