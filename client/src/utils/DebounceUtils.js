export const pseudoAPICall = async (ms_time) => {
    await new Promise((resolve) => setTimeout(resolve, ms_time));
};
