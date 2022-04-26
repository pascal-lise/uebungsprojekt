import Console from 'model/Console';

export default {
    getConsoles: async (): Promise<Console[]> => {
        try {
            return (await fetch(`${process.env.REACT_APP_API_URL}/consoles`)).json()
        } catch (e) {
            return await []
        }
    } 
}