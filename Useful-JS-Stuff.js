## Useful JS Stuff

#### Nested Ternary (aka chained)
const withTernary = ({
  conditionA, conditionB
}) => (
  (!conditionA) // if not condition a
    ? valueC //value c
    : (conditionB) // else if condition b
    ? valueA //value a 
    : valueB // else value b
);
