import ConsoleService from "../service/ConsoleService";
import Console from '../../model/Console';

export default {
    getConsoles: async (): Promise<Console[]> => await ConsoleService.getConsoles()
}