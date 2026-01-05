
export const generateAIInsight = async (apiKey, language, benefitTitle, terms) => {
    const prompt = `
    You are a helpful Visa Benefits Assistant.
    Language: ${language} (Translate the answer to this language).
    Task: Explain this credit card benefit simply in 1 short sentence (max 20 words).
    Benefit: ${benefitTitle}
    Terms: ${terms}
    
    Output just the simple explanation.
  `;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("AI Error:", error);
        return null;
    }
};
