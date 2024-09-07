try {
    let result = riskyFunction(); 
} catch (error) {
    console.error('An error occurred:', error.message);
}

function riskyFunction() {
    throw new Error('This is a risky function');
}