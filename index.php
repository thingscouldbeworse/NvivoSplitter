<!DOCTYPE html>
<head>
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	<script src="jquery-csv.js"></script>
	<script type="text/javascript" src="FileSaver.js"></script>
	<script type="text/javascript" src="jszip/dist/jszip.js"></script>
	<script type="text/javascript" src="split.js"></script>
	<link rel="stylesheet" href="style.css" type="text/css" media="all">
</head>

<title> NVivo Ready Splitter </title>

<div class="box" >
	<label class="uploadBTN">
		<input type="file" id="file" name="file"  enctype="multipart/form-data" />
		<span> Choose File </span>
	</label>
</div>
<script>
	
    document.getElementById('file').addEventListener('change', readFile, false);

</script>