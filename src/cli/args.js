import { argv } from 'node:process';

const parseArgs = ()=> {
    var str = "";
    if(argv.length > 2) {
        for (let index = 2; index < argv.length; index+=2) {
            if (argv[index].startsWith('--') && argv[index + 1]) {
            str+=`${argv[index].slice(2)} is ${argv[index + 1]}, `;
            }
        }
    }
    console.log(str.slice(0, -2));
};

parseArgs();