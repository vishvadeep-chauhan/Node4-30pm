// Task 5: Fitness Center - Gym Membership Validator
// Scenario: For a dynamic gym website, the backend needs to verify if a user's chosen subscription plan is valid and calculate the total cost. The route takes the planType (e.g., monthly, quarterly, yearly) and the months they want to enroll for.


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get("/gym/:planType/:months",(req, res) => {
    const {planType , months} = req.params;

    const m = parseInt(months)

    if (isNaN(m) || m <= 0){
        return res.status(400).json({error: "invalid months"})
    }

    let totalCost = 0;

    if(planType === "monthly"){
        totalCost = m * 500;

    }else if(planType === 'quarterly'){
        if( m % 3 !== 0){
            return res.status(400).json({ error: "Quarterly plan must be multiple of 3 months" })
        }
         totalCost = (m / 3)* 1200;


    }else if (planType === "yearly"){
        if ( m % 12 !== 0){
            return res.status(400).json({ error: "Yearly plan must be multiple of 12 months"})

        }
        totalCost = (m / 12) * 4000;
    } else {
        return res.status(400).json({ error:  "Invalid plan type"})
    }

res.json({
    status: "success",
    data: {
        planType,
        months: m,
        totalCost
    }
});


})

