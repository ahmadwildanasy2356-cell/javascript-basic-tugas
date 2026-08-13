function buatSession(usernameInput) {
    let username = usernameInput;
    let isLogin = true;

    return {
        cekStatus: function() {
            let statusText = "Logout";
            if (isLogin) {
                statusText = "Login";
            }
            console.log("User: " + username + ", Status: " + statusText);
        },
        logout: function() {
            isLogin = false;
        },
        login: function() {
            isLogin = true;
        }
    };
}

const sessionBudi = buatSession("budi123");
const sessionAni = buatSession("ani456");

sessionBudi.logout();

sessionBudi.cekStatus(); 
sessionAni.cekStatus();  
