const displayDuration = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60_000);
    const remainingMilliseconds = milliseconds - (minutes * 60_000);

    return `${minutes}' ${(remainingMilliseconds / 1000.0).toFixed(1)}''`
}

export {
    displayDuration
}