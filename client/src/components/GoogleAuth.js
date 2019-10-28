import React from "react";

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client.init({
				clientId:
					"81166866981-agb6v4ou05d5rmgabmi6lddpj1eadk0b.apps.googleusercontent.com",
				scope: "email"
			});
		});
	}

	render() {
		return <div>Google Auth</div>;
	}
}

export default GoogleAuth;
