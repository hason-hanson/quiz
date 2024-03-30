let score = 0;

document.getElementById("button1").addEventListener("click", function() {
    console.log("Button clicked!"); 
    // Check if event listener is triggered
    let a1 = document.getElementById("q1").value;
    let msg;

    if (a1.toLowerCase() === "ryan" || a1.toLowerCase() === "ryan xu" || a1.toLowerCase() === "ryan shoe" || a1.toLowerCase() === "ryan shroom" || a1.toLowerCase() === "whyofthenot1") {
        msg = `YES! The answer is ${a1}.`;
        score++;
    } else {
        msg = `No, your answer right now is ${a1}.`;
    }

    document.getElementById("output").innerHTML = msg;
    document.getElementById("score").textContent = `Score: ${score}/7`;
});

document.getElementById("button2").addEventListener("click", function() {

    let a2 = document.getElementById("q2").value;
    let msg2;

    if (a2.toLowerCase() === "hanson" || a2.toLowerCase() === "hanson chan" || a2.toLowerCase() === "hason" || a2.toLowerCase() === "chanson han" || a2.toLowerCase() === "chickens_thebest" || a2.toLowerCase() === "mtrhayhay" || a2.toLowerCase() === "mtrhayhay08") {
        msg2 = `YES! The answer is ${a2}.`;
        score++;
    } else {
        msg2 = `No, your answer right now is ${a2}.`;
    }

    document.getElementById("output2").innerHTML = msg2;
    document.getElementById("score").textContent = `Score: ${score}/7`;
});

document.getElementById("button3").addEventListener("click", function() {

    let a3 = document.getElementById("q3").value;
    let msg3;

    if (a3.toLowerCase() === "caellum" || a3.toLowerCase() === "carllum" || a3.toLowerCase() === "dragonidium" || a3.toLowerCase() === "boykisser" || a3.toLowerCase() === "caellum coleman" || a3.toLowerCase() === "calcium" || a3.toLowerCase() === "random_foxes" || a3.toLowerCase() === "femmboyfurry") {
        msg3 = `YES! The answer is ${a3}.`;
        score++;
    } else {
        msg3 = `No, your answer right now is ${a3}.`;
    }

    document.getElementById("output3").innerHTML = msg3;
    document.getElementById("score").textContent = `Score: ${score}/7`;
});

document.getElementById("button4").addEventListener("click", function() {

    let a3 = document.getElementById("q4").value;
    let msg3;

    if (a3.toLowerCase() === "aadil" || a3.toLowerCase() === "abdil" || a3.toLowerCase() === "anthill" || a3.toLowerCase() === "aadil ahsan" || a3.toLowerCase() === "themightydill") {
        msg3 = "YES! The answer is Aadil.";
        score++;
    } else {
        msg3 = `No, your answer right now is ${a3}.`;
    }

    document.getElementById("output4").innerHTML = msg3;
    document.getElementById("score").textContent = `Score: ${score}/7`;
});

document.getElementById("button5").addEventListener("click", function() {

    let a = document.getElementById("q5").value;
    let msg;

    if (a.toLowerCase() === "matthew" || a.toLowerCase() === "matthew schulz" || a.toLowerCase() === "potatomanonmars" || a.toLowerCase() === "filmoregas") {
        msg = "YES! The answer is Matthew.";
        score++;
    } else {
        msg = `No, your answer right now is ${a}.`;
    }

    document.getElementById("output5").innerHTML = msg;
    document.getElementById("score").textContent = `Score: ${score}/7`;
});

document.getElementById("button6").addEventListener("click", function() {

    let a = document.getElementById("q6").value.toLowerCase();
    let msg;
    let correctAnswers = ["evan", "evan spyracopoulos", "evan scoliosis", "ytree", "tshepo_shepherd"]

    if (correctAnswers.includes(a)) {
        msg = `YES! The answer is ${a}.`;
        score++;
    } else {
        msg = `No, your answer right now is ${a}.`;
    }

    document.getElementById("output6").innerHTML = msg;
    document.getElementById("score").textContent = `Score: ${score}/7`;
});

document.getElementById("button7").addEventListener("click", function() {

    let a = document.getElementById("q7").value;
    let msg;

    if (a.toLowerCase() === "aidan" || a.toLowerCase() === "aidan capicio" || a.toLowerCase() === "aids" || a.toLowerCase() === "aidsjc" || a.toLowerCase() === "aidan joseph capicio" || a.toLowerCase() === "aidan cappuccino") {
        msg = `YES! The answer is ${a}.`;
        score++;
    } else {
        msg = `No, your answer right now is ${a}.`;
    }

    document.getElementById("output7").innerHTML = msg;
    document.getElementById("score").textContent = `Score: ${score}/7`;
});