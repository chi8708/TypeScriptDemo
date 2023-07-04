let list=[4,5,6];
for (const key in list) {
    console.log(key);//0,1,2
}

for (const item of list) {
    console.log(item);//4,5,6
}

for (let index = 0; index < list.length; index++) {
    const element = list[index];
    console.log(element);//4,5,6
    
}

list.forEach(element => {
    console.log(element);//4,5,6
});