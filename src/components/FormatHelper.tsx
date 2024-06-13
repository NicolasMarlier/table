const displayDuration = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60_000);
    const remainingMilliseconds = milliseconds - (minutes * 60_000);

    if(minutes > 0) {
        return `${minutes}' ${(remainingMilliseconds / 1000.0).toFixed(1)}''`
    }
    else {
        return `${(remainingMilliseconds / 1000.0).toFixed(1)}''`
    }
    
}

export {
    displayDuration
}