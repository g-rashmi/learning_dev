import { DefaultService } from "./generated";

const main = async () => {
    try {
        const response = await DefaultService.getUsers("11234");
        console.log(response);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

main();
