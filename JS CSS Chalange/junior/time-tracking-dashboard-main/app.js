const buttonDaily = document.getElementById("daily");
const buttonWeekly = document.getElementById("weekly");
const buttonMonthly = document.getElementById("monthly");


const workDailyHours = document.getElementById("workDailyHours");
const workWeeklyHours = document.getElementById("workWeeklyHours");
const workMonthlyHours = document.getElementById("workMonthlyHours");
const lastDayWork = document.getElementById("lastDayWork");
const lastWeekWork = document.getElementById("lastWeekWork");
const lastMonthWork = document.getElementById("lastMonthWork");


const playDailyHours = document.getElementById("playDailyHours");
const playWeeklyHours = document.getElementById("playWeeklyHours");
const playMonthlyHours = document.getElementById("playMonthlyHours");
const lastDayPlay = document.getElementById("lastDayPlay");
const lastWeekPlay = document.getElementById("lastWeekPlay");
const lastMonthPlay = document.getElementById("lastMonthPlay");


const studyDailyHours = document.getElementById("studyDailyHours");
const studyWeeklyHours = document.getElementById("studyWeeklyHours");
const studyMonthlyHours = document.getElementById("studyMonthlyHours");
const lastDayStudy = document.getElementById("lastDayStudy");
const lastWeekStudy = document.getElementById("lastWeekStudy");
const lastMonthStudy = document.getElementById("lastMonthStudy");


const exerciseDailyHours = document.getElementById("exerciseDailyHours");
const exerciseWeeklyHours = document.getElementById("exerciseWeeklyHours");
const exerciseMonthlyHours = document.getElementById("exerciseMonthlyHours");
const lastDayExercise = document.getElementById("lastDayExercise");
const lastWeekExercise = document.getElementById("lastWeekExercise");
const lastMonthExercise = document.getElementById("lastMonthExercise");


const socialDailyHours = document.getElementById("socialDailyHours");
const socialWeeklyHours = document.getElementById("socialWeeklyHours");
const socialMonthlyHours = document.getElementById("socialMonthlyHours");
const lastDaySocial = document.getElementById("lastDaySocial");
const lastWeekSocial = document.getElementById("lastWeekSocial");
const lastMonthSocial = document.getElementById("lastMonthSocial");


const selfCareDailyHours = document.getElementById("selfCareDailyHours");
const selfCareWeeklyHours = document.getElementById("selfCareWeeklyHours");
const selfCareMonthlyHours = document.getElementById("selfCareMonthlyHours");
const lastDaySelfeCare = document.getElementById("lastDaySelfeCare");
const lastWeekSelfeCare = document.getElementById("lastWeekSelfeCare");
const lastMonthSelfeCare = document.getElementById("lastMonthSelfeCare");



const dayList = [];
const weekList = [];
const monthList = [];


dayList.push(workDailyHours,playDailyHours,studyDailyHours,exerciseDailyHours,socialDailyHours,selfCareDailyHours,
    lastDayWork,lastDayPlay,lastDayStudy,lastDayExercise,lastDaySocial,lastDaySelfeCare);

weekList.push(workWeeklyHours,playWeeklyHours,studyWeeklyHours,exerciseWeeklyHours,socialWeeklyHours,
    selfCareWeeklyHours,lastWeekWork,lastWeekPlay,lastWeekStudy,lastWeekExercise,lastWeekSocial,lastWeekSelfeCare);


monthList.push(workMonthlyHours,playMonthlyHours,studyMonthlyHours,exerciseMonthlyHours,socialMonthlyHours,
    selfCareMonthlyHours,lastMonthWork,lastMonthPlay,lastMonthStudy,lastMonthExercise,lastMonthSocial,lastMonthSelfeCare);

    
weekList.forEach(e => {
    e.style = "display:none";
});

monthList.forEach(e => {
    e.style = "display:none";
});




buttonDaily.addEventListener("click", function() 
{
    dayList.forEach(e => {
        e.style = "display:block";
    });

    weekList.forEach(e => {
        e.style = "display:none";
    });

    monthList.forEach(e => {
        e.style = "display:none";
    });
})




buttonWeekly.addEventListener("click", function() 
{
    weekList.forEach(e => {
        e.style = "display:block";
    });
    dayList.forEach(e => {
        e.style = "display:none";
    });
    monthList.forEach(e => {
        e.style = "display:none";
    });

})



buttonMonthly.addEventListener("click", function() 
{
    monthList.forEach(e => {
        e.style = "display:block";
    });
    dayList.forEach(e => {
        e.style = "display:none";
    });
    weekList.forEach(e => {
        e.style = "display:none";
    });
})
