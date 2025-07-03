// Utility function to display results
function displayResult(elementId, message, type = 'info') {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.className = `result ${type}`;
}

// Custom Error Classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'NetworkError';
        this.statusCode = statusCode;
    }
}

class TimeoutError extends Error {
    constructor(message, timeout) {
        super(message);
        this.name = 'TimeoutError';
        this.timeout = timeout;
    }
}

// Exercise 1: Basic Error Handling
document.getElementById('divideBtn').addEventListener('click', () => {
    try {
        const num1 = prompt('Enter first number:');
        const num2 = prompt('Enter second number:');
        
        if (num1 === null || num2 === null) {
            throw new Error('Operation cancelled by user');
        }
        
        const result = parseFloat(num1) / parseFloat(num2);
        
        if (isNaN(result)) {
            throw new Error('Invalid numbers provided');
        }
        
        if (!isFinite(result)) {
            throw new Error('Division by zero is not allowed');
        }
        
        displayResult('result1', `Result: ${result}`, 'success');
        console.log(`Division successful: ${num1} / ${num2} = ${result}`);
        
    } catch (error) {
        displayResult('result1', `Error: ${error.message}`, 'error');
        console.error(`Division error: ${error.message}`);
    }
});

document.getElementById('parseBtn').addEventListener('click', () => {
    try {
        const jsonString = prompt('Enter JSON string:');
        
        if (jsonString === null) {
            throw new Error('Operation cancelled by user');
        }
        
        const parsed = JSON.parse(jsonString);
        displayResult('result1', `Parsed: ${JSON.stringify(parsed, null, 2)}`, 'success');
        console.log('JSON parsing successful');
        
    } catch (error) {
        displayResult('result1', `JSON Parse Error: ${error.message}`, 'error');
        console.error(`JSON parse error: ${error.message}`);
    }
});

document.getElementById('arrayBtn').addEventListener('click', () => {
    try {
        const array = [1, 2, 3, 4, 5];
        const index = prompt('Enter array index (0-4):');
        
        if (index === null) {
            throw new Error('Operation cancelled by user');
        }
        
        const numIndex = parseInt(index);
        
        if (isNaN(numIndex)) {
            throw new Error('Invalid index: must be a number');
        }
        
        if (numIndex < 0 || numIndex >= array.length) {
            throw new Error(`Index out of bounds: ${numIndex} (valid range: 0-${array.length - 1})`);
        }
        
        const value = array[numIndex];
        displayResult('result1', `Array[${numIndex}] = ${value}`, 'success');
        console.log(`Array access successful: index ${numIndex} = ${value}`);
        
    } catch (error) {
        displayResult('result1', `Array Error: ${error.message}`, 'error');
        console.error(`Array access error: ${error.message}`);
    }
});

// Exercise 2: Async Error Handling
document.getElementById('fetchBtn').addEventListener('click', async () => {
    try {
        displayResult('result2', 'Fetching user data...', 'info');
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        if (!response.ok) {
            throw new NetworkError(`HTTP ${response.status}: ${response.statusText}`, response.status);
        }
        
        const user = await response.json();
        displayResult('result2', `User: ${user.name} (${user.email})`, 'success');
        console.log('User data fetched successfully');
        
    } catch (error) {
        if (error instanceof NetworkError) {
            displayResult('result2', `Network Error: ${error.message}`, 'error');
            console.error(`Network error: ${error.message}`);
        } else {
            displayResult('result2', `Fetch Error: ${error.message}`, 'error');
            console.error(`Fetch error: ${error.message}`);
        }
    }
});

document.getElementById('timeoutBtn').addEventListener('click', async () => {
    try {
        displayResult('result2', 'Starting timeout operation...', 'info');
        
        const result = await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new TimeoutError('Operation timed out', 3000));
            }, 3000);
            
            // Simulate some work
            setTimeout(() => {
                clearTimeout(timeout);
                resolve('Operation completed successfully!');
            }, Math.random() * 4000); // Random time between 0-4 seconds
        });
        
        displayResult('result2', result, 'success');
        console.log('Timeout operation completed');
        
    } catch (error) {
        if (error instanceof TimeoutError) {
            displayResult('result2', `Timeout Error: ${error.message}`, 'error');
            console.error(`Timeout error: ${error.message}`);
        } else {
            displayResult('result2', `Error: ${error.message}`, 'error');
            console.error(`Error: ${error.message}`);
        }
    }
});

document.getElementById('randomBtn').addEventListener('click', async () => {
    try {
        displayResult('result2', 'Executing random operation...', 'info');
        
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve('Random operation succeeded!');
                } else {
                    reject(new Error('Random operation failed!'));
                }
            }, 1000);
        });
        
        displayResult('result2', result, 'success');
        console.log('Random operation succeeded');
        
    } catch (error) {
        displayResult('result2', `Random Error: ${error.message}`, 'error');
        console.error(`Random operation failed: ${error.message}`);
    }
});

// Exercise 3: Promise Handling
document.getElementById('promiseBtn').addEventListener('click', () => {
    displayResult('result3', 'Handling promise...', 'info');
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3;
            if (success) {
                resolve('Promise resolved successfully!');
            } else {
                reject(new Error('Promise rejected!'));
            }
        }, 1500);
    });

    promise
        .then(result => {
            displayResult('result3', result, 'success');
            console.log('Promise resolved');
        })
        .catch(error => {
            displayResult('result3', `Promise Error: ${error.message}`, 'error');
            console.error(`Promise rejected: ${error.message}`);
        });
});

document.getElementById('allBtn').addEventListener('click', async () => {
    try {
        displayResult('result3', 'Executing Promise.all...', 'info');
        
        const promises = [
            new Promise(resolve => setTimeout(() => resolve('Task 1'), 1000)),
            new Promise(resolve => setTimeout(() => resolve('Task 2'), 2000)),
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.7) {
                        reject(new Error('Task 3 failed'));
                    } else {
                        resolve('Task 3');
                    }
                }, 1500);
            })
        ];

        const results = await Promise.all(promises);
        displayResult('result3', `All tasks completed: ${results.join(', ')}`, 'success');
        console.log('Promise.all completed successfully');
        
    } catch (error) {
        displayResult('result3', `Promise.all Error: ${error.message}`, 'error');
        console.error(`Promise.all failed: ${error.message}`);
    }
});

document.getElementById('raceBtn').addEventListener('click', async () => {
    try {
        displayResult('result3', 'Executing Promise.race...', 'info');
        
        const promises = [
            new Promise(resolve => setTimeout(() => resolve('Fast task'), 500)),
            new Promise(resolve => setTimeout(() => resolve('Slow task'), 2000)),
            new Promise((resolve, reject) => setTimeout(() => reject(new Error('Failed task')), 1000))
        ];

        const result = await Promise.race(promises);
        displayResult('result3', `Race winner: ${result}`, 'success');
        console.log('Promise.race completed');
        
    } catch (error) {
        displayResult('result3', `Promise.race Error: ${error.message}`, 'error');
        console.error(`Promise.race failed: ${error.message}`);
    }
});

// Exercise 4: Custom Error Classes
document.getElementById('validationBtn').addEventListener('click', () => {
    try {
        const email = prompt('Enter email:');
        
        if (email === null) {
            throw new Error('Operation cancelled by user');
        }
        
        if (!email) {
            throw new ValidationError('Email is required', 'email');
        }
        
        if (!email.includes('@')) {
            throw new ValidationError('Email must contain @ symbol', 'email');
        }
        
        if (email.length < 5) {
            throw new ValidationError('Email is too short', 'email');
        }
        
        displayResult('result4', `Valid email: ${email}`, 'success');
        console.log('Email validation successful');
        
    } catch (error) {
        if (error instanceof ValidationError) {
            displayResult('result4', `Validation Error: ${error.message} (Field: ${error.field})`, 'error');
            console.error(`Validation error: ${error.message}`);
        } else {
            displayResult('result4', `Error: ${error.message}`, 'error');
            console.error(`Error: ${error.message}`);
        }
    }
});

document.getElementById('networkBtn').addEventListener('click', async () => {
    try {
        displayResult('result4', 'Testing network connection...', 'info');
        
        const response = await fetch('https://httpstat.us/404');
        
        if (!response.ok) {
            throw new NetworkError(`Server returned ${response.status}`, response.status);
        }
        
        displayResult('result4', 'Network connection successful', 'success');
        console.log('Network test successful');
        
    } catch (error) {
        if (error instanceof NetworkError) {
            displayResult('result4', `Network Error: ${error.message} (Status: ${error.statusCode})`, 'error');
            console.error(`Network error: ${error.message}`);
        } else {
            displayResult('result4', `Error: ${error.message}`, 'error');
            console.error(`Error: ${error.message}`);
        }
    }
});

document.getElementById('customBtn').addEventListener('click', () => {
    try {
        const action = prompt('Enter action (success/error/timeout):');
        
        if (action === null) {
            throw new Error('Operation cancelled by user');
        }
        
        switch (action.toLowerCase()) {
            case 'success':
                displayResult('result4', 'Custom operation successful!', 'success');
                console.log('Custom operation successful');
                break;
            case 'error':
                throw new ValidationError('This is a custom validation error', 'custom');
            case 'timeout':
                throw new TimeoutError('Custom timeout error', 5000);
            default:
                throw new Error(`Unknown action: ${action}`);
        }
        
    } catch (error) {
        if (error instanceof ValidationError) {
            displayResult('result4', `Custom Validation Error: ${error.message}`, 'error');
            console.error(`Custom validation error: ${error.message}`);
        } else if (error instanceof TimeoutError) {
            displayResult('result4', `Custom Timeout Error: ${error.message}`, 'error');
            console.error(`Custom timeout error: ${error.message}`);
        } else {
            displayResult('result4', `Custom Error: ${error.message}`, 'error');
            console.error(`Custom error: ${error.message}`);
        }
    }
});

// Exercise 5: Async/Await Practice
document.getElementById('asyncBtn').addEventListener('click', async () => {
    try {
        displayResult('result5', 'Starting async operation...', 'info');
        
        const result = await simulateAsyncOperation('Async Task', 2000);
        displayResult('result5', result, 'success');
        console.log('Async operation completed');
        
    } catch (error) {
        displayResult('result5', `Async Error: ${error.message}`, 'error');
        console.error(`Async operation failed: ${error.message}`);
    }
});

document.getElementById('parallelBtn').addEventListener('click', async () => {
    try {
        displayResult('result5', 'Executing parallel operations...', 'info');
        
        const startTime = Date.now();
        
        const results = await Promise.all([
            simulateAsyncOperation('Task A', 1000),
            simulateAsyncOperation('Task B', 1500),
            simulateAsyncOperation('Task C', 800)
        ]);
        
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        displayResult('result5', `Parallel results: ${results.join(', ')}\nDuration: ${duration}ms`, 'success');
        console.log(`Parallel execution completed in ${duration}ms`);
        
    } catch (error) {
        displayResult('result5', `Parallel Error: ${error.message}`, 'error');
        console.error(`Parallel execution failed: ${error.message}`);
    }
});

document.getElementById('sequentialBtn').addEventListener('click', async () => {
    try {
        displayResult('result5', 'Executing sequential operations...', 'info');
        
        const startTime = Date.now();
        
        const result1 = await simulateAsyncOperation('Task 1', 1000);
        const result2 = await simulateAsyncOperation('Task 2', 1500);
        const result3 = await simulateAsyncOperation('Task 3', 800);
        
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        displayResult('result5', `Sequential results:\n1. ${result1}\n2. ${result2}\n3. ${result3}\nDuration: ${duration}ms`, 'success');
        console.log(`Sequential execution completed in ${duration}ms`);
        
    } catch (error) {
        displayResult('result5', `Sequential Error: ${error.message}`, 'error');
        console.error(`Sequential execution failed: ${error.message}`);
    }
});

// Helper function for async operations
function simulateAsyncOperation(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) { // 90% success rate
                resolve(`${name} completed successfully`);
            } else {
                reject(new Error(`${name} failed`));
            }
        }, delay);
    });
}

// Initialize
console.log('JavaScript Error Handling & Async Functions Practice loaded'); 