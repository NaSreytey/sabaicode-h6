const readFile=require('./ex3')
const writeFile=require('./ex4')

readFile('input.txt')
    .then(data => {
        console.log('input.txt:', data);
        return writeFile('output1.txt', data + '\nFirst modification');
    })
    .then(data => {
        console.log(data);
        return readFile('output1.txt');
    })
    .then(data => {
        console.log('output1.txt:', data);
        return writeFile('output2.txt', data + '\nSecond modification');
    })
    .then(data => {
        console.log(data);
        return readFile('output2.txt');
    })
    .then(data => {
        console.log('output2.txt:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });