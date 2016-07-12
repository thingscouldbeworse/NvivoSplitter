
function readFile (evt) {
	var files = evt.target.files;
	var file = files[0];           
	var reader = new FileReader();
	reader.onload = function() {

		var position = this.result.indexOf("\n");
		string_result = this.result;
		string_result = this.result.substring(position+1);
		var csv_objects = $.csv.toObjects(string_result);

		var zip = new JSZip();

		for( var key in csv_objects ){
			var row = csv_objects[key];
			filename = row['channel'] + " " + row['date'] + " " + row['time'] + ".txt";
			
			if( row["Preview to longer segment? "] == '23' ){
				content = row['Transcript Text:'] + "\n" + "yes";
			}
			else if( row["Preview to longer segment? "] == '24' ){
				content = row['Transcript Text:'] + "\n" + "no";
			}
			
			console.log( filename );
			console.log( content );

			zip.file(filename, content);
		}

		zip.generateAsync({type:"blob"})
		.then(function(content) {
		    // see FileSaver.js
		    saveAs(content, "split_text.zip");
		});	
	}

	reader.readAsText(file)
}