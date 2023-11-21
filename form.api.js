module.exports = async function (waw) {
	waw.crud('form', {
		create: {
			ensure: async (req, res, next) => {
				req.body.domain = req.get('host');
				next();
			}
		},
		get: {
			ensure: waw.next,
			query: req => {
				return { domain: req.get('host') }
			}
		},
		fetch: {
			ensure: waw.next,
			query: req => {
				return {
					_id: req.body._id
				}
			}
		},
		update: {
			ensure: waw.next,
			query: req => {
				return {
					_id: req.body._id
				}
			}
		},
		delete: {
			ensure: waw.next,
			query: req => {
				return {
					_id: req.body._id
				}
			}
		}
	});
};
