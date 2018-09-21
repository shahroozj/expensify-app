const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers:', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
});

test('should say greeting', () => {
    const result = generateGreeting('Shahrooz');

    expect(result).toBe('Hello Shahrooz!');
});

test('should say greeting anonymously', () => {
    const result = generateGreeting();

    expect(result).toBe('Hello Anonymous!');
});