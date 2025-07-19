import app from "./src/app.js";
import { envProvider } from "./src/constants/env.constants.js";




app.listen(envProvider.PORT, () => {
    console.log(`Server is running on port ${envProvider.PORT}`);
})