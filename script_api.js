
export async function addUserToJson(data) {

    let res = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },

        body:  JSON.stringify(data)
    });

    return res;
}
