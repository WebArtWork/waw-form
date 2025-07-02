module.exports = function (waw) {
	const Schema = waw.mongoose.Schema({
		appId: String,
		title: String,
		formId: String,
		active: Boolean,
		domain: String,
		components: [
			{
				name: String,
				key: String,
				root: Boolean,
				fields: [{}],
				components: [{}],
			},
		],
	});

	Schema.methods.create = function (obj, user, sd) {
		this.title = obj.title;

		this.appId = obj.appId;

		this.active = !!obj.active;

		this.formId = obj.formId;

		this.components = obj.components;

		this.domain = obj.domain;
	};

	return (waw.Form = waw.mongoose.model("Form", Schema));
};
