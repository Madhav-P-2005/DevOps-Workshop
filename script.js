const version = "v1.0.0";

document.getElementById("version").innerText =
    "Deployment Version: " + version;

function updateTime() {
    document.getElementById("time").innerText =
        "Server Time: " + new Date().toLocaleString();
}

setInterval(updateTime, 1000);
updateTime();