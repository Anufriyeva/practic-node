const usersRepository = require("../repositories/user");

class UsersServices {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUser(payload) {
        return await this.usersRepository.create(payload);
    }

    async findByEmail(email) {
        return await this.usersRepository.findByEmail(email);
    }
    
}
const usersService = new UsersServices(usersRepository);
module.exports = usersService;