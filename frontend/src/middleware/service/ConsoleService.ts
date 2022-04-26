import Console from '../../model/Console';

export default {
    getConsoles: async (): Promise<Console[]> => await fetch(`${process.env.REACT_APP_API_URL}/consoles`).then(res => res.json())
}