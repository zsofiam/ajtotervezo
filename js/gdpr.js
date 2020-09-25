
$(function() {
	function successOnTrackingPost(response){
					location.reload(true);
				}
	
	$("#del-session").on( "click", function() {
		$.post("xhr/del-session.php", function(response) {successOnTrackingPost(response);});
	});

	$("#ned-session").on( "click", function() {
		$.post("xhr/ned-session.php", function(response) {successOnTrackingPost(response);});
	});

	$("#track-key-enable-youtube").on( "click", function() {
		$.post("xhr/track-enable.php", {'track-key': 'youtube'}, function(response) {successOnTrackingPost(response);});
	});

	$("#track-key-enable-facebook").on( "click", function() {
		$.post("xhr/track-enable.php", {'track-key': 'facebook'}, function(response) {successOnTrackingPost(response);});
	});

	$("#track-group-enable-statistics").on( "click", function() {
		$.post("xhr/track-enable.php", {'track-group': 'statistics'}, function(response) {successOnTrackingPost(response);});
	});

	$("#track-enable").on( "click", function() {
		$.post("xhr/track-enable.php", function(response) {successOnTrackingPost(response);});
	});

	$("#track-multi-group-enable").on( "click", function() {
		console.log('track-multi-group-enable - click');
		var container = $(this).closest('.track-multi-group-container');
		console.log('container');
		console.log(container);
		var chkArray = [];

		var items = container.find(".track-multi-group-item:checked");
		console.log('items');
		console.log(items);

		container.find(".track-multi-group-item:checked").each(function() {
			console.log('track-multi-group-item:checked');
			console.log($(this));
			chkArray.push($(this).val());
		});

		var selected;
		selected = chkArray.join('|');
		console.log(selected);
		//if(selected.length > 0){
			$.post("xhr/track-enable.php", {'track-group': selected}, function(response) {successOnTrackingPost(response);});
		//}
	});

	$("#track-multi-key-enable").on( "click", function() {
		$.post("xhr/track-enable.php", {'track-key': 'youtube|facebook'}, function(response) {successOnTrackingPost(response);});
	});

	$("#track-disable").on( "click", function() {
		$.post("xhr/track-disable.php", function(response) {successOnTrackingPost(response);});
	});

	$("#delete-cookies").on( "click", function() {
		$.post("xhr/delete-cookies.php", function(response) {successOnTrackingPost(response);});
	});

	$(".cookie-group-open").on("click", function(){
		console.log('cookie-group-open');
		var group = $(this).data('group');
		console.log('group');
		console.log(group);
		$(".track-multi-group-detail-container").show();
		$("#track-multi-group-wrapper").find('.group-items').each(function(){
			if( ! $(this).hasClass(group)){
				$(this).hide();
			//}else{
			//	$(this).show();
			}
		});
		$("#track-multi-group-wrapper").find('.group-items.'+group).show();
	});
	$("#cookie-group-close").on("click", function (){
		$(".track-multi-group-detail-container").hide();
		$("#track-multi-group-wrapper").find('.group-items').hide();
	});
});

		