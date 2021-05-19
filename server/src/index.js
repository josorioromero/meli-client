// @vendors and setup
import _fecth from 'node-fetch';
if (!global.fetch) {
    global.fetch = _fecth;
}

import dotenv from 'dotenv';
const result = dotenv.config();
if (result.error) {
    throw result.error;
}

// start server
import app from './app';
app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
});