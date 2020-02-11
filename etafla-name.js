<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script>
$(function() {
	var url = 'https://spreadsheets.google.com/feeds/cells/1RIYCm7Ob5qlBPGw_UWm1blzpx5dvhfFbwr3TDCehUR4/od6/public/values?alt=json';
	var target = $('#targetdiv');

	/***
	 * 改行関数
	 */
	function nl2br(str) {
		return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
	}

	$.getJSON(url, function(data) {
		var list = data.feed.entry;
		var list_length = list.length;
		var cnt = 1; // 行のカラム数
		var content = '';

		for (var i = 0; i < Math.ceil(list_length / cnt); i++) {
			var j = i * cnt;
			var Arr = list.slice(j, j + cnt);

			// テキストを取得
			content += '<p>' + Arr[0].content.$t + '</p>';
		}

		target.append(content);
	});
})
</script>
