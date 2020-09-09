// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){
    console.log("Window Loaded");

    let shuttleHeight = 0;
    let rocketPositionLeft = 0;
    let rocketPositionTop = 0;

    document.getElementById("takeoff").addEventListener("click", function(event){
        let takeoffConfirm = window.confirm("Confirm shuttle is ready for takeoff.");

        if(takeoffConfirm){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.background = "#22d0e3";
            document.getElementById("spaceShuttleHeight").innerHTML = (shuttleHeight += 10000);

            document.getElementById("landing").addEventListener("click", function(event){
                window.alert("The shuttle is landing. Landing gear engaged.");
                document.getElementById("flightStatus").innerHTML = "The shuttle has landed";
                document.getElementById("shuttleBackground").style.background = "green";
                shuttleHeight = 0;
                document.getElementById("spaceShuttleHeight").innerHTML = 0;
                rocketPositionLeft = 0;
                rocketPositionTop = 0;
                document.getElementById("rocket").style.left = "0px"
                document.getElementById("rocket").style.top = "0px"
            });

            document.getElementById("missionAbort").addEventListener("click", function(event){
                let abortMissionConfirm = window.confirm("Confirm that you want to abort the mission.");
        
                if (abortMissionConfirm){
                    document.getElementById("flightStatus").innerHTML = "Mission aborted";
                    document.getElementById("shuttleBackground").style.background = "green";
                    shuttleHeight = 0;
                    document.getElementById("spaceShuttleHeight").innerHTML = 0;
                    rocketPositionLeft = 0;
                    rocketPositionTop = 0;
                    document.getElementById("rocket").style.left = "0px"
                    document.getElementById("rocket").style.top = "0px"
                }
            });

            document.getElementById("right").addEventListener("click", function(event){
                const rocket = document.getElementById("rocket");
                rocketPositionLeft += 10;
                if (rocketPositionLeft > 280){
                    rocketPositionLeft = 280;
                }
                rocket.style.left = `${rocketPositionLeft}px`;
            });

            document.getElementById("left").addEventListener("click", function(event){
                const rocket = document.getElementById("rocket");
                rocketPositionLeft -= 10;
                if (rocketPositionLeft < -280){
                    rocketPositionLeft = -280;
                }
                rocket.style.left = `${rocketPositionLeft}px`;
            });

            document.getElementById("down").addEventListener("click", function(event){
                const rocket = document.getElementById("rocket");
                rocketPositionTop += 10;
                if (rocketPositionTop > 250){
                    rocketPositionTop = 250;
                }
                rocket.style.top = `${rocketPositionTop}px`;
                shuttleHeight -= 10000;
                if (shuttleHeight < 10000){
                    shuttleHeight = 10000;
                }
                document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
            });

            document.getElementById("up").addEventListener("click", function(event){
                const rocket = document.getElementById("rocket");
                rocketPositionTop -= 10;
                if (rocketPositionTop < 0){
                    rocketPositionTop = 0;
                }
                rocket.style.top = `${rocketPositionTop}px`;
                shuttleHeight += 10000;
                document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
            });
        }
    });
    
})