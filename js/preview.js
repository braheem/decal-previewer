/*function setVehicle(path){
     //document.getElementById('layer1').src = path;
     $("#layer1").attr("src", path);
}*/

window.onload = function() {
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
				
				var img = new Image();
				//set image id
				img.id = "layer1";
				// Set the img src property using the data URL.
				img.src = reader.result;
				img.style.zIndex = "10";
				img.position = "absolute";
				
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

}
