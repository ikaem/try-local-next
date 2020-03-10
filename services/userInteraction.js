const baseUrl = "http://localhost:3000/api";

export const sendMessage = async (body) => {
    try {
        const resp = await fetch(`${baseUrl}/sendmessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        return resp.json();

    }
    catch (error) {
        console.log("error");
    }
}