module.exports = async function (waw) {
	waw.crud("form", {
		create: {
			ensure: waw.role("admin", (req, res, next) => {
				req.body.domain = req.get("host");

				next();
			}),
		},
		get: {
			ensure: waw.next,
			query: (req) => {
				const params = {};

				const [_, queryString] = req.originalUrl.split("?");

				if (queryString) {
					queryString.split("&").forEach((param) => {
						const [key, value] = param.split("=");

						params[decodeURIComponent(key)] =
							decodeURIComponent(value);
					});
				}

				return params.appId
					? { appId: params.appId }
					: { domain: req.get("host") };
			},
		},
		fetch: {
			ensure: waw.next,
			query: (req) => {
				return {
					_id: req.body._id,
				};
			},
		},
		update: {
			ensure: waw.role("admin"),
			query: (req) => {
				return {
					_id: req.body._id,
				};
			},
		},
		delete: {
			ensure: waw.role("admin"),
			query: (req) => {
				return {
					_id: req.body._id,
				};
			},
		},
	});
};
