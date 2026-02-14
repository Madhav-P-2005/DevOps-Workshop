const version = "1.0.0";

document.getElementById("version").innerText =
    "Deployment Version: " + version;

document.getElementById("time").innerText =
    "Server Time: " + new Date().toLocaleString();