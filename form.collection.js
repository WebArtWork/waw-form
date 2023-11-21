module.exports = function (waw) {
	const Schema = waw.mongoose.Schema({
		title: String,
		formId: String,
		active: Boolean,
		domain: String,
		components: [{
			name: String,
			key: String,
			root: Boolean,
			fields: [{
				name: String,
				value: String
			}],
			components: [{}]
		}]
	});

	Schema.methods.create = function (obj, user, sd) {
		this.title = obj.title;
		this.active = !!obj.active;
		this.formId = obj.formId;
		this.components = obj.components;
		this.domain = obj.domain;
	}

	return waw.Form = waw.mongoose.model('Form', Schema);
};
