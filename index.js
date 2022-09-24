function saturdayFun(saturdayActivity = "roller-skate"){
    return(`This Saturday, I want to ${saturdayActivity}!`)
}
saturdayFun()
saturdayFun("sleep")
console.log(saturdayFun())
console.log(saturdayFun("sleep"))

const mondayWork = function (mondayActivity = "go to the office") {
    return(`This Monday, I will ${mondayActivity}.`)
}
mondayWork()
mondayWork("dance salsa")
console.log(mondayWork())
console.log(mondayWork("dance salsa"))

// function wrapAdjective(adjective = "special") {
//   return function () {(`You are *${adjective}*!`)
// }
// }
const wrapAdjective = function(highlight = "*") {
    return function(adjective = "special") { 
        return `You are ${highlight}${adjective}${highlight}!`
    }
}
