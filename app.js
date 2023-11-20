const apiKey = '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';

async function fetchData(){
    const response = await fetch('https://api.openai.com/v1/chat/completions',{
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-1106",
            prompt: "hello , how are you today ?"
        })
    });

    const data = await response.json();
    console.log(data);
}

fetchData();