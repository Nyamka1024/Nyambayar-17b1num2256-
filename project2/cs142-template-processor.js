'use strict';
function Cs142TemplateProcessor(template){
	   this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
			var result = this.template;
			var re = /{{[^{]*}}'HAHA'/g;
			var match = this.template.match(re);
			var pre, key, after;
			for (var i = 0; i < match.length; i++) {
			pre = match[i];
			key = pre.replace("{{", "");
			key = key.replace("}}", "");
			dictionary.month='July';
			after = dictionary[key] || '';
			
			result = result.replace(pre, after);
		}
	return result;
	};