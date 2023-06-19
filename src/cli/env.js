import { env } from 'node:process';

const parseEnv = () => {
    var strarr = [];
    Object.keys(env).forEach(key => {
        if (key.includes('RSS_')) {
            strarr.push(key + '=' + env[key]); 
        }    
    });
    console.log(strarr.join('; '));
};

parseEnv();