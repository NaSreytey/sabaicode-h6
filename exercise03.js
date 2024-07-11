const readFile=require('./ex3')
const writeFile=require('./ex4')

async function excuteFile(){
    try{
        const read = await readFile('input.txt')
        console.log(`Read file content from input.txt:`,read);

        const output1 = read + '\nFirst modification!'
        await writeFile('./output1.txt',output1)
        console.log('Writing to output1.txt is successful');

        const contentOutput1 = await readFile('./output1.txt')
        console.log(`Read file contet from output1.txt`,contentOutput1);

        const output2 = output1 + '\nSecond modification!'
        await writeFile('./output2.txt',output2)
        console.log('Writing to output2.txt is successful');

        const contentOutput2 = await readFile('./output2.txt')
        console.log(`Read file content from output2.txt`,contentOutput2);
        
    }
    catch(error){
        console.error(error);
    }
}

excuteFile();