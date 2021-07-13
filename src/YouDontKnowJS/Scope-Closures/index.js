function test() {
    console.log(a); // We make RHS look-up for a, and the compiler defined it. But the engine still haven assigned value to it, thats why it 'undefined'
}
test(); // RHS - Engine asks Scope do you know anything about test, Scope said yes, Compiler defined it (but unlike variables, the compiler actually assigned the function value as well)
var a = 1; // LHS look-up - Engine asks Scope do you know anything abot a, Scopes said say and that Compiler created the variable. Then the Engine will asign the value on the the variable
