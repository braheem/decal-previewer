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
	
	//rotate decal in intervals Clockwise and Counterclockwise
	var angle = 0;
	$('#rotateCW').click(function() {
		angle += 5;
		$("#layer2cont").rotate(angle);
	});
	$('#rotateCCW').click(function() {
		angle -= 5;
		$("#layer2cont").rotate(angle);
	});
	function createImage(imgid, containerid, zIndex, imgsource){
	
		var div = document.createElement('div');
		div.id = containerid;
		div.style.display = "inline-block";
		div.style.zIndex = zIndex;
		div.style.position = "relative";
		div.style.maxHeight = "100%";
		div.style.maxWidth = "100%";
		div.style.overflow = "hidden";
		div.style.width = "100%";
		
		var img = new Image();
		img.id = imgid;
		img.onload = function() {	
			img.style.position = "relative";
			img.style.maxHeight = "100%";
			img.style.maxWidth = "100%";
			div.appendChild(img);
			fileDisplayArea.appendChild(div);
			$("#" + containerid).draggable({
				containment: "#fileDisplayArea"
			});
			$("#" + imgid).resizable({
				aspectRatio: true,
				containment: "#fileDisplayArea",
				alsoResize: "#" + containerid
			});
		}
		img.src = imgsource;
		
	}
	
});



