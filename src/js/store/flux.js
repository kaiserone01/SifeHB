import { sweetNotify } from "../utils/sweetalertnotifier";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isAuth: false,
			allUsers: [],
			allActivities: {},
			userActivities: [],
			userInvestments: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			getAllActivities: async (page = 1, limit = 10, type = "", document_id="") => {
				let token = localStorage.getItem("token");
				try {
					let response = await fetch(`http://44.204.11.183:8080/admin/users-activities?page=${page}&limit=${limit}&type=${type}&document_id=${document_id}`, {
						method: "GET",

						headers: {
							"Content-Type": "application/json",
							"Authorization": token
						}
					});
					if (response.ok) {
						let body = await response.json();
						console.log(body)
						setStore({ allActivities: body })
					}
				} catch (error) {
					console.log(error)
				}
			},
			findUserByNane: async (username) => {
				const response = await fetch(`http://44.204.11.183:8080/admin/find-user-by-name?username=${username}`);
				if (response.ok) {
					let body = await response.json();
					console.log(body)
					return true;
				}
				return false;
			},
			getAllUsers: async () => {
				let token = localStorage.getItem("token");
				try {
					let response = await fetch(`http://44.204.11.183:8080/admin/users`, {
						method: "GET",

						headers: {
							"Content-Type": "application/json",
							"Authorization": token
						}
					});
					if (response.ok) {
						let body = await response.json();
						setStore({ allUsers: body.result })
					}
				} catch (error) {
					console.log(error)
				}


			},
			getUserActivites: async (id, type) => {
				let token = localStorage.getItem("token");
				try {
					let response = await fetch(`http://44.204.11.183:8080/admin/user/activities/${id}/?from=0&type=${type}&limit=20`, {
						method: "GET",
						headers: {
							"Authorization": token
						}
					})
					if (response.ok) {
						let body = await response.json();
						setStore({ userActivities: body.userActivities })
					}
				} catch (error) {
					console.log(error)
				}

			},
			getUserInvestments: async (id) => {
				let token = localStorage.getItem("token");
				try {
					let response = await fetch(`http://44.204.11.183:8080/admin/user/investments/${id}`, {
						method: "GET",
						headers: {
							"Authorization": token
						}
					})
					if (response.ok) {
						let body = await response.json();
						setStore({ userInvestments: body.investment })
					}
				} catch (error) {
					console.log(error)
				}

			},
			changeUserStatus: async (id, data) => {

				let token = localStorage.getItem("token");
				try {
					let response = await fetch(`http://44.204.11.183:8080/admin/user/edit/${id}`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": token
						},
						body: JSON.stringify(data)
					})
					if (response.ok) {
						let body = await response.json();
						sweetNotify(body.message, 'success')
						return true;
					} else if (response.status === 500) {
						let body = await response.json();
						sweetNotify(body.message, 'error')
					}
					return false;
				} catch (error) {
					console.log(error)
				}

			},
			registerNewUser: async (data) =>{
				let token = localStorage.getItem("token");
				try {
					const response = await fetch("http://44.204.11.183:8080/admin/register-user", {
						method: "POST",
						headers: { 
							"Content-Type": "application/json",
							"Authorization": token 
						},
						body: JSON.stringify(data)
					});
					if(response.ok){
						let body = await response.json();
						sweetNotify(body.message, 'success');
						return true;
					}else if(response.status === 409){
						let body = await response.json();
						sweetNotify(body.message, 'error')
						return false;
					}
					return false;
				} catch (error) {
					console.log(error)
				}
				
			},
			loginUser: async (data) => {
				let actions = getActions();
				try {
					const response = await fetch("http://44.204.11.183:8080/admin/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data)
					});

					if (response.status === 200) {
						const body = await response.json();
						localStorage.setItem("token", body.token)
						setStore({ token: body.token })
						actions.getAllUsers();
						actions.getAllActivities();
						return true;
					} else if (response.status === 401) {
						const body = await response.json();
						sweetNotify(body.message, 'error')
						return false;
					}
					return false;
				} catch (error) {
					console.log(error)
				}

			},
			logoutUser: async () => {

				let token = localStorage.getItem("token");
				try {
					const response = await fetch("http://44.204.11.183:8080/admin/logout", {
						method: "POST",
						headers: {
							"Authorization": token
						},
					});

					if (response.status === 200) {
						//const body = await response.json();
						localStorage.removeItem("token")
						setStore({ token: undefined })
						return true;
					} else if (response.status === 500) {
						const body = await response.json();
						sweetNotify(body.err, 'error')
						return false;
					}
					return false;
				} catch (error) {
					console.log(error)
				}

			}
		}
	};
};

export default getState;
