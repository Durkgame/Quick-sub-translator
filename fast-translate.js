javascript:
function openSubTranslator(){
	var h = 400;
	var w = 1280;
	function detectRUorENG(str) {
		if (!str) {
			return '';
		} else {
			var full = str.split(/\s+/).length;
			var eng = str.split(/\W+/);
			var fromTo;
			if (eng[0] === '') {
				eng.shift();
			}
			if (eng[eng.length-1] === '') {
				eng.pop();
			}
			if (full/2 <= eng.length) {
				fromTo = '#en/ru/';
			} else {
				fromTo = '#ru/en/';
			}
			return fromTo + encodeURIComponent(str);
		};
	};
	var x = window.open('https://translate.google.ru/' + detectRUorENG(window.getSelection().toString()), 'standalone', 'toolbar=no,location=no,scrollbars=yes,height=' + Math.min(h, screen.availHeight) + ',width=' + screen.availWidth + ',left=' + Math.max(0, (screen.availWidth - w) / 2) + ',top=' + Math.min(screen.availHeight - h - 65, screen.availHeight / 8 * 5));
};
openSubTranslator();
