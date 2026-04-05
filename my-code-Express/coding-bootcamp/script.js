// <!-- task4: Coding Bootcamp - Course Progress Tracker 

//  Create a route for a coding bootcamp where the URL takes a studentId, totalModules, and completedModules. The backend must calculate the percentage of the course completed and send a motivational message. -->


const express = require("express");

const app = express();

const port = 3000;


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get("/progress/:studentId/:totalModules/:completedModules",(req, res) =>{

    const {studentId, totalModules, completedModules } = req.params;

    const total = parseInt(totalModules);
    const completed = parseInt(completedModules);

    // first chack inputs from user 

    if (isNaN(total) || isNaN(completed) || total <=0){
        return res.status(400).json({error: "invalid input"});

    }

    const percentage = (completed / total) *100;

    let message = " ";

    if (percentage === 100){
        message = "excellent ! course complete"
    }else if(percentage >= 75){
        message = "gress process almost there"
    }else if (percentage >= 50){
        message = "good job ! keep going "
    }else{
        message = "stay cnsistand you can do it "

    }

    res.json({
        studentId,
        totalModules: total,
        completedModules: completed,
        percentage: percentage.toFixed(2),
        message

    })

})

