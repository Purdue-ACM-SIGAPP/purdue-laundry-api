module.exports = function (input) {
	const locations = {
		"cary": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=f9db4842-8fae-47d6-8660-645d358ef739",
		"earhart": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=a0728ede-60be-4155-8ca9-dcde37ad431d",
		"harrison": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=525ba5bf-7e58-4359-b78f-e8bfb34416cc",
		"hawkins": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=1733b280-3ea8-4259-be35-d03b6b6d606a",
		"hillenbrand": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=75896de0-7b2e-4270-bee0-4aefc49b1bd2",
		"mccutcheon": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=27b0544c-8fba-401b-b133-6307cd1fb851",
		"meredith_nw": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=697af07e-a32e-445a-b6ad-4f381458e7b4",
		"meredith_se": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=3a05822f-c67a-49e9-8105-8255014d491f",
		"owen": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=706682c2-e8f8-4503-8d36-1283cc9bda1e",
		"shreve": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=f681e273-d865-4274-bf4a-ba9dea2229ce",
		"tarkington": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=06784d8c-9c16-4d05-9548-0f82dfdcc842",
		"third": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=96ed9941-352d-478f-88c3-1a0320066464",
		"wiley": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=c29eba8b-63d1-4090-bd32-ea85c67f483c",
		"windsor_duhme": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=b98170b6-c561-4ea5-8b2d-28ebf4f7cdda",
		"windsor_warren": "http://wpvitassuds01.itap.purdue.edu/washalertweb/washalertweb.aspx?location=da8165d6-7ff9-4311-80c7-2bc3e2da5e5e"
	};
	return locations[input];
};