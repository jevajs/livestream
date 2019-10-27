
// When this runs, this will only send to the client
RegisterNetEvent("js:chatCL")
onNet("js:chatCL", (obj) => {
    emit("chat:addMessage", {
        args: [obj.msg],
        color: obj.color
    })
    console.log(obj.msg)
    return
})

setImmediate(() => {
    // Chat suggestions for seeing options when using a command
    emit('chat:addSuggestion', '/kick', 'Kick someone.', [
        { name: "id", help: "The player's server id" }
    ]);
    emit('chat:addSuggestion', '/unban', 'Unban someone.', [
        { name: "Steam ID", help: "ex: steam:110000110ba80e2" }
    ]);
    emit('chat:addSuggestion', '/ban', 'Ban someone.', [
        { name: "id", help: "The player's server id" }
    ]);
});
