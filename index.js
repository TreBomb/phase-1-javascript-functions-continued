function saturdayFun(event=`roller-skate`) {
    return `This Saturday, I want to ${event}!`;
}

const mondayWork = function(job=`go to the office`) {return `This Monday, I will ${job}.`;};

function wrapAdjective(str=`*`) {
    const message = `You are`;
    return function(type=`special`) {
        return(`${message} ${str}${type}${str}!`);
    }
}