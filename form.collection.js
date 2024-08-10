module.exports = function (waw) {
	const Schema = waw.mongoose.Schema({
		title: String,
		appId: String,
		formId: String,
		active: Boolean,
		domain: String,
		components: [{
			name: String,
			key: String,
			root: Boolean,
			fields: [{}],
			components: [{}]
		}]
	});

	Schema.methods.create = function (obj, user, sd) {
		this.appId = obj.appId;
		this.title = obj.title;
		this.active = !!obj.active;
		this.formId = obj.formId;
		this.components = obj.components;
		this.domain = obj.domain;
	}

	return waw.Form = waw.mongoose.model('Form', Schema);
};
